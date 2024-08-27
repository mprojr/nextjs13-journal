'use client'
import { Fugaz_One } from 'next/font/google';
import React from 'react';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function JournalPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center p-8 bg-white bg-opacity-75">
      <div className="w-full min-w-[200px] max-w-3xl mx-auto sm:p-4 p-4 sm:bg-notebook sm-bg-notebook bg-no-repeat bg-cover rounded-xl shadow-lg overflow-hidden ">
        <h2 className={'text-3xl font-extrabold text-center text-teal-coral-6 mb-6 ' + fugaz.className}>
          Journal
        </h2>
        <textarea
          placeholder="Write your thoughts here..."
          className="w-full h-96 p-6 bg-transparent border-none focus:outline-none resize-none text-teal-coral-6 text-lg leading-relaxed"
        />
      </div>
    </div>
  );
}
