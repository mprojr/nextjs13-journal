import React from 'react'
import { Fugaz_One } from 'next/font/google'
import Button from './Button'
import Calender from './Calender'
import Link from 'next/link'
import CallToAction from './CallToAction'
import { demoData } from '@/utils'
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] })

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-4 sm:gap-8'>
      <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className }><span className='textGradient '>Journal</span> helps you track your <span className='textGradient '>daily</span> life!</h1>
      <p className='text-lg sm:text-xl md:text-2x text-center w-full mx-auto max-w-[600px]'>
        Track your mood and progress <span className='font-semibold'>every day of the year</span> with your personalized calendar.
      </p>

      <CallToAction />
      <Calender demoData={true} completeData={demoData} />
    </div>

  )
}
