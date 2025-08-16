import React, { useState } from 'react';

const propertyData = {
  Villa: [
    {
      image: '/mbh2.jpeg',
      badge: 'RERA',
      title: 'Luxury Villa in Jubilee Hills',
      details: '2,940 sq ft • 4 BHK • 3 Bath',
      footer: 'By Prestige Group',
    },
    {
      image: '/mbh3.jpeg',
      badge: 'RERA',
      title: 'Spacious Villa in Gachibowli',
      details: '3,500 sq ft • 5 BHK • 4 Bath',
      footer: 'By My Home Group',
    },
    {
      image: '/mhb1.jpeg',
      badge: 'RERA',
      title: 'Modern Villa in Kokapet',
      details: '3,100 sq ft • 4 BHK • 4 Bath',
      footer: 'By Aparna Constructions',
    },
    {
      image: '/mbh4.avif',
      badge: 'RERA',
      title: 'Elegant Villa in Nanakramguda',
      details: '3,800 sq ft • 5 BHK • 5 Bath',
      footer: 'By Lodha Group',
    },
    {
      image: '/mbh2.jpeg',
      badge: 'RERA',
      title: 'Grand Villa in Financial District',
      details: '4,200 sq ft • 6 BHK • 6 Bath',
      footer: 'By Cybercity Builders',
    },
  ],
  '3 BHK': [
    {
      image: '/mbh4.avif',
      badge: 'RERA',
      title: 'Modern 3 BHK in Kondapur',
      details: '1,800 sq ft • 3 BHK • 3 Bath',
      footer: 'By Aparna Constructions',
    },
    {
      image: '/mhb1.jpeg',
      badge: 'RERA',
      title: 'Elegant 3 BHK in Hitech City',
      details: '1,600 sq ft • 3 BHK • 2 Bath',
      footer: 'By Lodha Group',
    },
    {
      image: '/mbh2.jpeg',
      badge: 'RERA',
      title: 'Spacious 3 BHK in Gachibowli',
      details: '1,750 sq ft • 3 BHK • 3 Bath',
      footer: 'By Prestige Group',
    },
    {
      image: '/mbh3.jpeg',
      badge: 'RERA',
      title: 'Comfortable 3 BHK in Madhapur',
      details: '1,550 sq ft • 3 BHK • 2 Bath',
      footer: 'By My Home Group',
    },
    {
      image: '/mbh4.avif',
      badge: 'RERA',
      title: 'Premium 3 BHK in Jubilee Hills',
      details: '2,000 sq ft • 3 BHK • 3 Bath',
      footer: 'By Cybercity Builders',
    },
  ],
  '2 BHK': [
    {
      image: '/mbh3.jpeg',
      badge: 'RERA',
      title: 'Cozy 2 BHK in Financial District',
      details: '1,200 sq ft • 2 BHK • 2 Bath',
      footer: 'By Prestige Group',
    },
    {
      image: '/mbh2.jpeg',
      badge: 'RERA',
      title: 'Compact 2 BHK in Madhapur',
      details: '1,000 sq ft • 2 BHK • 1 Bath',
      footer: 'By My Home Group',
    },
    {
      image: '/mhb1.jpeg',
      badge: 'RERA',
      title: 'Affordable 2 BHK in Kondapur',
      details: '1,100 sq ft • 2 BHK • 2 Bath',
      footer: 'By Aparna Constructions',
    },
    {
      image: '/mbh4.avif',
      badge: 'RERA',
      title: 'Modern 2 BHK in Hitech City',
      details: '1,300 sq ft • 2 BHK • 2 Bath',
      footer: 'By Lodha Group',
    },
    {
      image: '/mbh3.jpeg',
      badge: 'RERA',
      title: 'Stylish 2 BHK in Gachibowli',
      details: '1,250 sq ft • 2 BHK • 2 Bath',
      footer: 'By Cybercity Builders',
    },
  ],
  'Independent House': [
    {
      image: '/mhb1.jpeg',
      badge: 'RERA',
      title: 'Independent House in Manikonda',
      details: '2,200 sq ft • 3 BHK • 3 Bath',
      footer: 'By Individual Seller',
    },
    {
      image: '/mbh4.avif',
      badge: 'RERA',
      title: 'Large Independent House in Kompally',
      details: '4,000 sq ft • 6 BHK • 5 Bath',
      footer: 'By Private Owner',
    },
    {
      image: '/mbh2.jpeg',
      badge: 'RERA',
      title: 'Spacious Independent House in Tellapur',
      details: '3,000 sq ft • 4 BHK • 4 Bath',
      footer: 'By Individual Seller',
    },
    {
      image: '/mbh3.jpeg',
      badge: 'RERA',
      title: 'Modern Independent House in Bachupally',
      details: '2,500 sq ft • 3 BHK • 3 Bath',
      footer: 'By Private Owner',
    },
    {
      image: '/mhb1.jpeg',
      badge: 'RERA',
      title: 'Luxury Independent House in Nallagandla',
      details: '3,500 sq ft • 5 BHK • 4 Bath',
      footer: 'By Individual Seller',
    },
  ],
  Duplex: [
    {
      image: '/mbh2.jpeg',
      badge: 'RERA',
      title: 'Stylish Duplex in Jubilee Hills',
      details: '3,000 sq ft • 4 BHK • 4 Bath',
      footer: 'By Prestige Group',
    },
    {
      image: '/mbh3.jpeg',
      badge: 'RERA',
      title: 'Contemporary Duplex in Kokapet',
      details: '2,800 sq ft • 3 BHK • 3 Bath',
      footer: 'By My Home Group',
    },
    {
      image: '/mhb1.jpeg',
      badge: 'RERA',
      title: 'Modern Duplex in Kondapur',
      details: '2,500 sq ft • 3 BHK • 3 Bath',
      footer: 'By Aparna Constructions',
    },
    {
      image: '/mbh4.avif',
      badge: 'RERA',
      title: 'Elegant Duplex in Hitech City',
      details: '3,200 sq ft • 4 BHK • 4 Bath',
      footer: 'By Lodha Group',
    },
    {
      image: '/mbh2.jpeg',
      badge: 'RERA',
      title: 'Spacious Duplex in Gachibowli',
      details: '2,900 sq ft • 3 BHK • 3 Bath',
      footer: 'By Cybercity Builders',
    },
  ],
  Penthouse: [
    {
      image: '/mbh4.avif',
      badge: 'RERA',
      title: 'Luxury Penthouse in Banjara Hills',
      details: '5,000 sq ft • 5 BHK • 6 Bath',
      footer: 'By Aparna Constructions',
    },
    {
      image: '/mhb1.jpeg',
      badge: 'RERA',
      title: 'Skyline Penthouse in Nanakramguda',
      details: '4,800 sq ft • 4 BHK • 5 Bath',
      footer: 'By Lodha Group',
    },
    {
      image: '/mbh2.jpeg',
      badge: 'RERA',
      title: 'Modern Penthouse in Jubilee Hills',
      details: '4,500 sq ft • 4 BHK • 5 Bath',
      footer: 'By Prestige Group',
    },
    {
      image: '/mbh3.jpeg',
      badge: 'RERA',
      title: 'Spacious Penthouse in Financial District',
      details: '5,200 sq ft • 6 BHK • 7 Bath',
      footer: 'By My Home Group',
    },
    {
      image: '/mbh4.avif',
      badge: 'RERA',
      title: 'Elegant Penthouse in Kokapet',
      details: '4,700 sq ft • 5 BHK • 6 Bath',
      footer: 'By Cybercity Builders',
    },
  ],
};

const ExploreByPropertyType: React.FC = () => {
  const propertyTypes = [
    { icon: '🏢', label: 'Villa' },
    { icon: '🏠', label: '3 BHK' },
    { icon: '🏚', label: '2 BHK' },
    { icon: '🏡', label: 'Independent House' },
    { icon: '🏘', label: 'Duplex' },
    { icon: '🏙', label: 'Penthouse' },
  ];

  const [activePropertyType, setActivePropertyType] = useState('2 BHK'); // Default active
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const propertiesToShow = propertyData[activePropertyType as keyof typeof propertyData] || [];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 288; // Card width (256px) + space-x-4 (16px) = 272px, let's use a bit more for smooth scroll
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-32 bg-white"> {/* Increased padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8"> {/* Reduced margin-bottom */}
          <h2 className="text-3xl font-bold text-gray-800 inline-block">Explore by Property type</h2>
        </div>

        {/* Top Row – Property Type Options */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap"> {/* Reduced margin-bottom */}
          {propertyTypes.map((type) => (
            <div
              key={type.label}
              className={`flex flex-col items-center justify-center p-4 w-28 h-28 rounded-lg shadow-sm cursor-pointer transition-all duration-300
                ${activePropertyType === type.label ? 'bg-teal-600 text-white font-bold' : 'bg-white border border-gray-200 text-gray-800'}`}
              onClick={() => setActivePropertyType(type.label)}
            >
              <span className="text-4xl mb-2">{type.icon}</span>
              <span className="text-sm">{type.label}</span>
            </div>
          ))}
        </div>

        {/* Second Row – Property Carousel */}
        <div className="relative p-14 rounded-lg">
          <div ref={carouselRef} className="flex overflow-x-auto scrollbar-hide space-x-6">
            {propertiesToShow.map((property, index) => (
              <div key={index} className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
                  <span className="absolute top-2 left-2 bg-blue-800 text-white text-xs px-2 py-1 rounded-md">
                    {property.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{property.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{property.details}</p>
                  <p className="text-gray-500 text-xs">{property.footer}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
            <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-3 shadow-lg"
            onClick={() => scrollCarousel('left')}
          >
            ◀
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-3 shadow-lg"
            onClick={() => scrollCarousel('right')}
          >
            ▶
          </button>
        </div>

        {/* Bottom Section – Action Button */}
        <div className="flex justify-center mt-2"> {/* Reduced margin-top even more */}
          <button className="px-12 py-5 border border-teal-600 text-teal-600 rounded-md font-semibold
            hover:bg-teal-600 hover:text-white transition-colors duration-300">
            View all Plots
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreByPropertyType;
