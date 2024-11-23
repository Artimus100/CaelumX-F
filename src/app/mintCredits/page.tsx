'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Coins, Users, BarChart3, Shield, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('business')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
            src="/images/logo.jpg" // Use your Earth image
            alt="Earth"
            width={50}
            height={10}
            className="rounded-full"
          /> 
                <span className="ml-2 font-bold text-xl">CaelumX</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#how-it-works" className="border-transparent text-gray-500 hover:border-green-500 hover:text-green-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                How It Works
              </Link>
              <Link href="#features" className="border-transparent text-gray-500 hover:border-green-500 hover:text-green-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </Link>
              <Link href="#profiles" className="border-transparent text-gray-500 hover:border-green-500 hover:text-green-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                User Profiles
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-green-50 to-green-100 py-20"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Empowering Sustainable Action</span>
              <span className="block text-green-600">with Blockchain Technology</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Tokenize Carbon Credits for Your Business or Invest in Fractional Ownership for a Greener Future.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                  Get Started for Businesses
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Explore Fractional Ownership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        id="how-it-works" 
        className="py-16 bg-white"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tokenize and Trade Carbon Credits
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Verification</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Carbon credits are verified and audited by accredited third-party organizations.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Coins className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Tokenization</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Verified credits are tokenized using smart contracts on our blockchain platform.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fractional Ownership</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Tokens are divided into smaller units, allowing individuals to purchase fractional ownership.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Trading</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Users can buy, sell, or trade their tokenized carbon credits on our marketplace.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features" 
        className="py-16 bg-green-50"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Sustainable Action
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Tokenization</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Blockchain technology ensures secure and transparent tokenization of carbon credits.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Verified Credits</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Access to a wide range of verified and audited carbon credits.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Trading Marketplace</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  User-friendly marketplace for trading fractionalized carbon credit tokens.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Impact Visualization</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Real-time tracking and visualization of your environmental impact.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.section>

      {/* User Profiles Section */}
      <motion.section 
        id="profiles" 
        className="py-16 bg-white"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">User Profiles</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Solutions for Businesses and Individuals
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button
                onClick={() => setActiveTab('business')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'business'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Business Profile
              </button>
              <button
                onClick={() => setActiveTab('individual')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'individual'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Individual Profile
              </button>
            </div>

            <div className="mt-8">
              {activeTab === 'business' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Business Profile</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Tokenizing large carbon credits</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Total Carbon Offset</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">50,000 tons CO2e</dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Tokens Minted</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">500,000 CCT</dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Current Market Value</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$750,000 USD</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              )}

              {activeTab === 'individual' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Individual Profile</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Owning fractional credits</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Total Carbon Offset</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">2.5 tons CO2e</dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Tokens Owned</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">25 CCT</dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Current Portfolio Value</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$37.50 USD</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 flex justify-center space-x-4">
            <Link href="/dashboard" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              Tokenize Carbon Credits Now
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link href="/dashboard" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200">
              Buy Fractional Ownership
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                About
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                How It Works
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                Blog
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                Contact Us
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                Legal Policies
              </Link>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://x.com/caelum_carbon/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2024 CaelumX, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}