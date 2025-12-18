"use client"
import Link from 'next/link';
import React from 'react';
const citizenOptions = ({link, emoji, emojibg, heading, desc}) => {

  return (
    <div>
        <Link href={link}>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer">
              <div className={`h-14 w-14 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-2xl ${emojibg}` }>
                {emoji}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
               {heading}
              </h2>
              <p className="mt-2 text-gray-600 text-md text-justify">
                {desc}
              </p>
            </div>
          </Link>
    </div>
  )
}

export default citizenOptions