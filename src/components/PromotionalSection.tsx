// components/VerifiedListings.tsx
import React from "react";

const VerifiedListings = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-10 text-center">
        {/* Small tagline */}
        <p className="text-red-500 font-handwriting mb-3">
          Based in Hamara Hyderabad!
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          100+ Premium verified <br /> listings in Hyderabad
        </h2>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 mb-8">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-teal-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 
                   11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Made in Hyderabad
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-teal-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 
                   11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Seller-friendly!
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-teal-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 
                   11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Verified & Premium listings*
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition">
            Submit Property
          </button>
          <button className="border border-teal-600 text-teal-600 px-6 py-2 rounded-md font-medium hover:bg-teal-50 transition">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerifiedListings;
