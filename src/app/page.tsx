'use client';
import ExploreByLocation from '../components/ExploreByLocation';
import ProjectNavigation from '../components/ProjectNavigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const images = [
    '/mhb1.jpeg',
    '/mbh2.jpeg',
    '/mbh3.jpeg',
    '/mbh4.avif',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* New Section: Hyderabad's #1 Property Listing Site & Carousel */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Heading */}
          <div className="md:w-1/3 text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Hyderabad's No.1<br /> property listing site
            </h2>
          </div>

          {/* Right Section: Carousel */}
          <div className="md:w-3/4 flex items-center justify-center relative">
            {/* Left Arrow */}
            <button className="absolute left-0 z-10 p-10 focus:outline-none -ml-4">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Carousel Cards Container */}
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {/* Card 1: 500+ Listings */}
              <div className="flex-shrink-0 w-52 bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                <div className="text-green-700 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">500+ Listings</h3>
                <p className="text-gray-600 text-left">Only verified listings and builder profiles</p>
              </div>

              {/* Card 2: Market Insights */}
              <div className="flex-shrink-0 w-52 bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                <div className="text-green-700 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Insights</h3>
                <p className="text-gray-600 text-left">Real trends, price data and ROI signals</p>
              </div>

              {/* Card 3: Hyderabad First */}
              <div className="flex-shrink-0 w-52 bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
                <div className="text-green-700 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hyderabad first</h3>
                <p className="text-gray-600 text-left">Only verified listing and builder profiles</p>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 z-10 p-10 focus:outline-none -mr-4">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      

      {/* Hero Section with Search Bar and City Names */}
      <section className="bg-white"> {/* Changed background color */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-4 mt-12">
              {/* Dropdown for All Hyderabad */}
              <div className="relative">
                <select className="appearance-none bg-white text-gray-800 px-6 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg pr-10">
                  <option>All Hyderabad</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {/* Search Input */}
              <div className="relative flex-grow max-w-xl">
                <input
                  type="text"
                  placeholder="Search by area name, property name"
                  className="w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg text-gray-800"
                />
                <button className="absolute right-0 top-0 h-full px-6 bg-green-700 text-white rounded-r-lg flex items-center space-x-2 hover:bg-green-800 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="font-semibold">Find Properties</span>
                </button>
              </div>
            </div>
          </div>

          {/* City Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Gachibowli', 'Kondapur', 'Kukatpally', 'Miyapur', 'Tellapur', 'Patancheru', 'Nallagandla', 'Hafeezpet', 'Bachupally'].map((city) => (
              <button key={city} className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200">
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-0xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-xl text-gray-600">Sponsored & Featured projects</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Left Side: Property Listing Card */}
            <div className="md:w-1/5 bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cybercity Westbrook</h3>
                <p className="text-gray-600 text-sm mb-4">Since 2013 • 4 Projects</p>
                <div className="flex items-center text-gray-700 mb-2">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  <span>4 BHK • 3 Bath</span>
                </div>
                <div className="flex items-center text-gray-700 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m-2 8l-3 3H9a2 2 0 01-2-2v-3a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3z" /></svg>
                  <span>2.5 Cr</span>
                </div>
                <button className="w-full border border-green-700 text-green-700 font-semibold py-2 rounded-lg hover:bg-green-700 hover:text-white transition-colors duration-200">
                  View Property
                </button>
              </div>
              <div className="mt-6 flex items-center">
                <div className="bg-blue-700 text-white text-sm font-bold px-3 py-2 rounded-md mr-3">PG</div>
                <div>
                  <p className="font-semibold text-gray-900">Cybercity builders & developers</p>
                  <p className="text-gray-600 text-sm">Since 2013 • 4 Projects</p>
                </div>
              </div>
            </div>

            {/* Right Side: Image Carousel */}
            <div className="md:w-2/3 relative">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image src={images[currentImageIndex]} alt={`Property Image ${currentImageIndex + 1}`} fill className="object-cover" />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white opacity-75' : 'bg-gray-400'
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreByLocation />
      <ProjectNavigation />
      
    </div>
  );
}
