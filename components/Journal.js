'use client'
import { Fugaz_One } from 'next/font/google';
import React from 'react';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function JournalPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center p-8 text-black bg-white bg-opacity-75">
      <div className="w-full min-w-[250px] max-w-3xl sm:p-4 p-4 sm:bg:notebook sm-bg-notebook bg-no-repeat bg-cover  mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden ">
        <h2 className={'text-3xl font-extrabold text-center text-teal-coral-6 mb-12 ' + fugaz.className}>
          Journal
        </h2>
        <textarea
          className="w-full h-96 bg-bottom bg-notebook-lines border-none focus:outline-none resize-none text-slate-600 text-lg leading-relaxed"
          placeholder="Write your thoughts here..."
        />
      </div>
    </div>
  );
}
