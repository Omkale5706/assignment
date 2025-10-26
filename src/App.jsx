import React from 'react'
import AboutTabs from './components/AboutTabs'
import Gallery from './components/Gallery'

export default function App() {
  return (
    <div className="min-h-screen flex items-start justify-center p-8">
      <div className="w-full max-w-6xl grid grid-cols-12 gap-6">
        {/* Left half: intentionally empty (desktop) */}
        <div className="col-span-7 lg:col-span-6 bg-transparent">
          <div className="h-[640px] border border-gray-700 rounded-xl p-6"></div>
        </div>

        {/* Right column */}
        <div className="col-span-5 lg:col-span-6 flex flex-col gap-6">
          {/* Tabs widget */}
          <div className="widget p-6">
            <AboutTabs />
          </div>

          {/* Gallery widget */}
          <div className="widget p-6">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  )
}