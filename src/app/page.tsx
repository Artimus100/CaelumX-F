'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const forestCards = [
  {
    id: 1,
    title: 'ForestForFuture',
    location: 'Afforestation, Brazil',
    credits: 76,
    vintage: 2022,
    image: '/images/Forest.png',
  },
  {
    id: 2,
    title: 'AmazonGuardian',
    location: 'Conservation, Peru',
    credits: 92,
    vintage: 2023,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    title: 'BorealProtect',
    location: 'Reforestation, Canada',
    credits: 64,
    vintage: 2022,
    image: '/placeholder.svg?height=200&width=300',
  },
]

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % forestCards.length)
  }

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + forestCards.length) % forestCards.length)
  }

  return (
<div className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900">
      {/* Navigation */}
      <nav className="p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between ">
          <Link href="/" className="text-emerald-400">
            <div className=" rounded-full  border-emerald-400" />
            <Image
            src="/images/logo.jpg" // Use your Earth image
            alt="Earth"
            width={50}
            height={10}
            className="rounded-full"
          />  
          </Link>
          <div className="bg-emerald-950/50 rounded-full backdrop-blur-sm p-2">
            <ul className="flex items-center gap-8 px-4">
              <li>
                <Link href="/" className="text-emerald-400 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-white/70 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  Contact
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/forestLandscape.jpg"
              alt="Forest background"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              BUILDING A{' '}
              <span className="text-green-400">CARBON-NEUTRAL</span> WORLD
              <br />
              WITH BLOCKCHAIN
            </motion.h1>
            <motion.p
              className="text-xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join us in creating a sustainable future through innovative
              blockchain solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="mintCredits"
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
              >
                Get Started with Carbon Credits
                <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="relative">
              <div className="flex overflow-hidden">
                {forestCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${
                      index === activeCard ? 'opacity-100' : 'opacity-0'
                    }`}
                    initial={false}
                    animate={{
                      x: `${(index - activeCard) * 100}%`,
                    }}
                  >
                    <div className="bg-emerald-900 rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {card.title}
                        </h3>
                        <p className="text-green-300 mb-4">{card.location}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">
                            {card.credits} Carbon Credits
                          </span>
                          <span className="text-sm">{card.vintage} Vintage</span>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm font-medium">Active</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={prevCard}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextCard}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 leading-tight">
              BUILDING A{' '}
              <span className="text-green-400">CARBON-NEUTRAL</span> WORLD
              <br />
              WITH BLOCKCHAIN
            </h2>
            <div className="relative w-64 h-64 mx-auto">
            <Image
            src="/images/image.jpg" // Use your Earth image
            alt="Earth"
            width={256}
            height={256}
            className="rounded-full"
          />
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-md"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-green-400">
                <Image src="/images/logo.jpg" alt="EcoChain" width={50} height={50} />
              </Link>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/caelum_carbon/" className="text-gray-400 hover:text-white mx-2">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}