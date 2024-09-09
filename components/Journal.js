'use client'
import { Fugaz_One } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { db, Timestamp } from '@/firebase'; // Ensure you have this import
import { collection, addDoc, query, getDocs, where, orderBy } from 'firebase/firestore'; 
import { useAuth } from '@/context/AuthContext'; // Assuming you have this context for user authentication

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function JournalPage({ selectedEntry }) { 
  const [journalEntry, setJournalEntry] = useState(''); // For new journal entry input
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state
  const [entries, setEntries] = useState([]); // Store journal entries
  const { currentUser } = useAuth(); // Get the current user
  
  const now = new Date(); // Get the current date

  // Fetch journal entries from the current day when the component mounts or when user changes
  useEffect(() => {
    const fetchCurrentDayEntries = async () => {
        if (!currentUser || selectedEntry) return;

        const userId = currentUser.uid;

        // Set the range for the start and end of the current day
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0); // Midnight of today
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Midnight of tomorrow

        try {
            // Check if Timestamp is correctly imported and use it for query ranges
            if (Timestamp && Timestamp.fromDate) {
                const q = query(
                    collection(db, 'users', userId, 'journals'),
                    where('createdAt', '>=', Timestamp.fromDate(startOfDay)),
                    where('createdAt', '<', Timestamp.fromDate(endOfDay)),
                    orderBy('createdAt', 'desc')
                );

                const querySnapshot = await getDocs(q);
                const currentDayEntries = [];
                querySnapshot.forEach((doc) => {
                    const entryData = doc.data();
                    // Ensure `createdAt` exists in the data
                    if (entryData?.createdAt) {
                        currentDayEntries.push({ id: doc.id, ...entryData });
                    } else {
                        console.log('Entry missing `createdAt` field: ', entryData);
                    }
                });

                setEntries(currentDayEntries); // Set the fetched entries in the state
            } else {
                console.error('Timestamp or fromDate is not defined properly');
            }
        } catch (err) {
            console.error('Error fetching journal entries: ', err.message);
        }
    };
    fetchCurrentDayEntries();
  }, [currentUser, selectedEntry]);

  // Handle journal entry submission
  const handleSaveJournal = async () => {
    if (journalEntry.trim() === '') {
      console.log('Empty journal entry');
      return;
    }
  
    if (!currentUser) {
      console.log('No user is logged in');
      return;
    }
  
    try {
      const userId = currentUser.uid;
      const createdAt = Timestamp.now(); // Use Firestore's Timestamp
  
      const docRef = await addDoc(collection(db, 'users', userId, 'journals'), {
        entry: journalEntry,
        createdAt: createdAt,
      });
  
      console.log('Journal entry saved with ID: ', docRef.id);
      setIsSubmitted(true);
      setJournalEntry(''); // Clear the journal entry after submission
  
      // Add the new entry to the entries state
      setEntries([{ id: docRef.id, entry: journalEntry, createdAt }, ...entries]);
    } catch (err) {
      console.error('Error saving journal entry: ', err.message);
    }
  };

  // Update entries when `selectedEntry` is passed from parent
  useEffect(() => {
    if (selectedEntry) {
      setEntries([selectedEntry]); // Show only the selected entry
    }
  }, [selectedEntry]);

  return (
    <div className="relative min-h-screen flex flex-col items-center p-8 text-black bg-white bg-opacity-75">


      {/* Display journal entries for the current day or the selected entry */}
      <div className="mb-16 w-full max-w-3xl ">
          {entries.length > 0 ? (
              entries.map((entry) => (
                  <div key={entry.id} className="w-full p-6 my-4 bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-[#01acc1] shadow-md rounded-lg transform transition duration-200 hover:scale-105 hover:shadow-xl">
                      <h3 className="text-2xl font-bold mb-3 text-[#01acc1]">
                          Entry from {new Date(entry.createdAt.seconds * 1000).toLocaleDateString()}
                      </h3>
                      <p className="text-lg text-gray-700 leading-7">
                          {entry.entry}
                      </p>
                  </div>
              ))
          ) : (
              <p className="mb-12 text-center text-lg text-gray-600">No journal entries found for today.</p>
          )}
      </div>

      <div className={`w-full min-w-[250px] max-w-3xl sm:p-4 p-4 sm:bg-notebook bg-no-repeat bg-cover mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden ${isSubmitted ? 'opacity-50 border shadow-xl ' : ''}`}>
        <h2 className={'text-3xl font-extrabold text-center text-teal-coral-6 mb-12 ' + fugaz.className}>
          Journal
        </h2>
        <textarea
          className="w-full h-96 bg-bottom bg-notebook-lines border-none focus:outline-none resize-none text-slate-600 text-lg leading-relaxed"
          placeholder="Write your thoughts here..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          disabled={isSubmitted} // Disable input after submission
        />
        <button 
          onClick={handleSaveJournal} 
          className="mt-4 px-6 py-2 bg-teal-coral-6 text-white rounded-lg shadow-lg"
          disabled={isSubmitted} // Disable button after submission
        >
          Save Entry
        </button>
      </div>
      {isSubmitted && (
        <div className="absolute top-1/3 transform -translate-y-1/2 bg-teal-coral-6 text-white px-8 py-4 rounded-lg shadow-lg">
          <p className="text-lg">Entry successfully submitted!</p>
        </div>
      )}

    </div>
  );
}
