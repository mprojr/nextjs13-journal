'use client'
import { Fugaz_One } from 'next/font/google';
import React, { useState } from 'react';
import { db } from '@/firebase'; // Ensure you have this import
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'; 
import { useAuth } from '@/context/AuthContext'; // Assuming you have this context for user authentication

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function JournalPage() {
  const [journalEntry, setJournalEntry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state
  const { currentUser } = useAuth(); // Get the current user

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
      const userId = currentUser.uid; // Get the actual user ID
      const docRef = await addDoc(collection(db, 'users', userId, 'journals'), {
        entry: journalEntry,
        createdAt: new Date(),
      });
      console.log('Journal entry saved with ID: ', docRef.id);
      setIsSubmitted(true); // Set the state to true after successful submission
      setJournalEntry(''); // Clear the journal entry field after submission
    } catch (err) {
      console.error('Error saving journal entry: ', err.message);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center p-8 text-black bg-white bg-opacity-75">
      <div className={`w-full min-w-[250px] max-w-3xl sm:p-4 p-4 sm:bg:notebook sm-bg-notebook bg-no-repeat bg-cover mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden ${isSubmitted ? 'opacity-50 border shadow-xl ' : ''}`}>
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
