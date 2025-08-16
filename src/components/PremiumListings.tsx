import React from 'react';

const PremiumListings = () => {
  const properties = [
    {
      id: 1,
      image: '/mhb1.jpeg',
      title: 'Luxury Villa in Jubilee Hills 24 floors',
      details: '2,940 sq ft • 4 BHK • 3 Bath • Ready to Move',
      price: '₹2.5 Cr',
      pricePerSqFt: '₹8,500/sq ft',
      builder: 'By Prestige Group',
    },
    {
      id: 2,
      image: '/mbh2.jpeg',
      title: 'Luxury Villa in Jubilee Hills 24 floors',
      details: '2,940 sq ft • 4 BHK • 3 Bath • Ready to Move',
      price: '₹2.5 Cr',
      pricePerSqFt: '₹8,500/sq ft',
      builder: 'By Prestige Group',
    },
    {
      id: 3,
      image: '/mbh3.jpeg',
      title: 'Luxury Villa in Jubilee Hills 24 floors',
      details: '2,940 sq ft • 4 BHK • 3 Bath • Ready to Move',
      price: '₹2.5 Cr',
      pricePerSqFt: '₹8,500/sq ft',
      builder: 'By Prestige Group',
    },
    {
      id: 4,
      image: '/mbh4.avif',
      title: 'Luxury Villa in Jubilee Hills 24 floors',
      details: '2,940 sq ft • 4 BHK • 3 Bath • Ready to Move',
      price: '₹2.5 Cr',
      pricePerSqFt: '₹8,500/sq ft',
      builder: 'By Prestige Group',
    },
  ];

  return (
    // Outer container for the entire section
    // my-12: increased margin-top and margin-bottom
    // px-8: increased padding-left and padding-right
    <section className="my-12 px-8">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-center mb-2 text-black">
        100+ Premium verified listings in Ameerpet
      </h2>
      {/* Subtitle */}
      <p className="text-center text-gray-500 text-sm mb-8">
        New Projects added everyday • verified listings only!
      </p>

      {/* Property cards container */}
      {/* mx-auto: center the block element horizontally */}
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6: responsive grid layout */}
      {/* mb-8: margin-bottom */}
      {/* max-w-4xl: increased maximum width for the container to make cards slightly larger */}
      {/* grid-cols-4: ensures 4 columns always, preventing vertical stacking */}
      <div className="mx-auto max-w-4xl grid grid-cols-4 gap-4 mb-8">
        {properties.map((property) => (
          // Individual property card
          // bg-white: white background
          // rounded-lg: rounded corners
          // shadow-lg: large shadow
          // overflow-hidden: hide overflowing content
          // p-2: increased padding on all sides
          <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden p-2">
            <div className="relative">
              {/* Property image */}
              {/* h-28: increased height for the image */}
              <img src={property.image} alt={property.title} className="w-full h-28 object-cover rounded-md mb-2" />
              {/* RERA badge */}
              <span className="absolute top-1 left-1 bg-blue-600 text-white text-xs font-semibold px-1 py-0.5 rounded">
                RERA
              </span>
            </div>
            {/* Card content */}
            {/* px-2: increased padding-left and padding-right */}
            <div className="px-2">
              {/* Title */}
              <h3 className="text-base font-semibold  text-black mb-1">{property.title}</h3>
              {/* Details */}
              <p className="text-gray-600 text-sm mb-1">{property.details}</p>
              {/* Price */}
              <p className="text-base font-bold text-teal-700 mb-1">
                {property.price} <span className="text-sm text-gray-500 font-normal">({property.pricePerSqFt})</span>
              </p>
              {/* Footer text */}
              <p className="text-gray-500 text-xs">{property.builder}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View Properties button */}
      {/* flex justify-center: center the button horizontally */}
      {/* mb-8: margin-bottom */}
      <div className="flex justify-center mb-8">
        {/* bg-teal-600: teal background */}
        {/* hover:bg-teal-700: darker teal on hover */}
        {/* text-white: white text */}
        {/* font-bold: bold font */}
        {/* py-3 px-6: padding-top/bottom and padding-left/right */}
        {/* rounded-lg: rounded corners */}
        {/* transition duration-300: smooth transition for hover effect */}
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          View Properties in Ameerpet →
        </button>
      </div>
    </section>
  );
};

export default PremiumListings;
