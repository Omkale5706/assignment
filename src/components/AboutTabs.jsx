import React, { useState } from 'react'

const tabs = [
  { key: 'about', label: 'About Me', content: (
    <>
      <p className="text-gray-300 leading-relaxed">
        Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
      </p>
      <p className="mt-3 text-gray-400 leading-relaxed">
        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and our twin daughters, Emma and Ella.
      </p>
    </>
  ) },
  { key: 'experiences', label: 'Experiences', content: (
    <ul className="list-disc pl-5 text-gray-300">
      <li>3 years at Salesforce — Senior Sales Rep</li>
      <li>2 years at Startup X — Account Manager</li>
      <li>Multiple enterprise-level deals closed</li>
    </ul>
  ) },
  { key: 'recommended', label: 'Recommended', content: (
    <div className="text-gray-300">
      <p className="mb-2">Recommended for you:</p>
      <div className="space-y-2">
        <div className="p-3 bg-[#232a2d] rounded-md">Connect with client leads</div>
        <div className="p-3 bg-[#232a2d] rounded-md">Try advanced analytics</div>
      </div>
    </div>
  ) }
]

export default function AboutTabs() {
  const [active, setActive] = useState('about')

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-full font-medium text-sm ${active === t.key ? 'bg-accent text-white' : 'bg-[#2f373a] text-gray-300'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="h-8 w-8 rounded-full bg-[#2f373a] flex items-center justify-center text-gray-400">?</div>
      </div>

      <div className="mt-2 p-4 bg-[#232a2d] rounded-lg text-sm">
        {tabs.find(t => t.key === active).content}
      </div>
    </div>
  )
}