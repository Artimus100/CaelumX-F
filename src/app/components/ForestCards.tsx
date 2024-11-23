'use client'

import { useState } from 'react'
import {  Circle, CircleDot } from 'lucide-react'

export default function ForestCards() {
  const [activeSlide, setActiveSlide] = useState(0)

  const forestCards = [
    {
      id: 1,
      image: '/placeholder.svg?height=400&width=300',
      carbonCredit: 76,
      vintage: 2022,
    },
    {
      id: 2,
      image: '/placeholder.svg?height=400&width=300',
      carbonCredit: 76,
      vintage: 2022,
    },
  ]

  return (
    <div className="relative mt-12 pb-12">
      <div className="overflow-hidden rounded-3xl border border-emerald-400/20">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {forestCards.map((card) => (
            <div key={card.id} className="w-full flex-shrink-0">
              <div className="relative aspect-video">
                <img src={card.image} alt="Forest landscape" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="bg-emerald-800/40 backdrop-blur-sm rounded-2xl p-6 max-w-md">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">ForestForFuture</h3>
                      <span className="text-emerald-400">220</span>
                    </div>
                    <p className="text-white/70 mb-4">Afforestation, Brazil</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center">
                          76
                        </div>
                        <span className="text-sm text-white/70">Carbon Credit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">2022</span>
                        <span className="text-sm text-white/70">Vintage</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {[0, 1].map((dot) => (
                      <button
                        key={dot}
                        onClick={() => setActiveSlide(dot)}
                        className="text-white/70 hover:text-white"
                      >
                        {dot === activeSlide ? (
                          <CircleDot className="w-4 h-4" />
                        ) : (
                          <Circle className="w-4 h-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
