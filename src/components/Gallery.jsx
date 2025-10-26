import React, { useRef, useState } from 'react'

export default function Gallery() {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1503424886303-1680f5f7b4d6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=efc0c3a6d3f7a79d07c93c77b0d07e6d',
    'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b77f18c3a5d7b2415f0f2327d7c78f4',
    'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a4a69e165d8a1b1513d1f1f1c0d3e69',
  ])
  const scrollRef = useRef(null)
  const fileRef = useRef(null)

  function handleAddImage(e) {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImages(prev => [url, ...prev])
    fileRef.current.value = ''
  }

  function scroll(dir = 'right') {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth / 1.5
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Gallery</h3>
        <div className="flex items-center gap-3">
          <label className="neu-btn px-4 py-2 text-sm cursor-pointer" style={{display:'inline-flex', alignItems:'center', gap:8}}>
            + ADD IMAGE
            <input ref={fileRef} accept="image/*" type="file" onChange={handleAddImage} className="hidden" />
          </label>

          <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full bg-[#2f373a] flex items-center justify-center text-gray-300">◀</button>
          <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-[#2f373a] flex items-center justify-center text-gray-300">▶</button>
        </div>
      </div>

      <div className="mt-2 p-4 bg-[#232a2d] rounded-lg">
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto thumb-scroll py-2">
          {images.map((src, i) => (
            <div key={i} className="min-w-[150px] h-[150px] rounded-lg overflow-hidden flex-shrink-0 bg-[#1f2325]">
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}