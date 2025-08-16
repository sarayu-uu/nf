import React, { useState } from 'react';
import Image from 'next/image';

interface Property {
  name: string;
  priceRange: string;
  pricePerSqFt: string;
  image: string;
}

interface Location {
  name: string;
  projectsVisible: boolean;
  image: string; // Each location has its own image
  properties: Property[];
}

const locations: Location[] = [
  { 
    name: 'Nanakaramguda', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '1.1 Cr - 1.36 Cr', pricePerSqFt: '6.57/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Lakeside', priceRange: '1.2 Cr - 1.5 Cr', pricePerSqFt: '7.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Brigade Gateway', priceRange: '1.0 Cr - 1.25 Cr', pricePerSqFt: '6.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Sarovar', priceRange: '1.15 Cr - 1.4 Cr', pricePerSqFt: '6.9/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Gachibowli', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Lake City', priceRange: '1.1 Cr - 1.36 Cr', pricePerSqFt: '6.57/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Bhooja', priceRange: '1.3 Cr - 1.6 Cr', pricePerSqFt: '7.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aliens Space Station', priceRange: '1.0 Cr - 1.3 Cr', pricePerSqFt: '6.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi GP Trends', priceRange: '1.25 Cr - 1.55 Cr', pricePerSqFt: '7.1/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Patancheru', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '85 L - 1.1 Cr', pricePerSqFt: '5.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Constructions', priceRange: '90 L - 1.15 Cr', pricePerSqFt: '5.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Navadweepa', priceRange: '95 L - 1.2 Cr', pricePerSqFt: '5.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Sunrise Park', priceRange: '88 L - 1.12 Cr', pricePerSqFt: '5.3/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Kukatpally', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '95 L - 1.25 Cr', pricePerSqFt: '5.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Sarovar', priceRange: '1.0 Cr - 1.3 Cr', pricePerSqFt: '6.0/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Jewel', priceRange: '1.05 Cr - 1.35 Cr', pricePerSqFt: '6.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi Usharam', priceRange: '98 L - 1.28 Cr', pricePerSqFt: '5.9/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Miyapur', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Lake City', priceRange: '1.1 Cr - 1.36 Cr', pricePerSqFt: '6.57/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Avatar', priceRange: '1.2 Cr - 1.5 Cr', pricePerSqFt: '7.0/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Hillpark', priceRange: '1.15 Cr - 1.45 Cr', pricePerSqFt: '6.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Lakeside', priceRange: '1.25 Cr - 1.55 Cr', pricePerSqFt: '7.2/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Madhapur', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '1.3 Cr - 1.6 Cr', pricePerSqFt: '7.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Bhooja', priceRange: '1.4 Cr - 1.7 Cr', pricePerSqFt: '8.0/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Sarovar', priceRange: '1.35 Cr - 1.65 Cr', pricePerSqFt: '7.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi GP Trends', priceRange: '1.25 Cr - 1.55 Cr', pricePerSqFt: '7.2/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Manikonda', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '1.0 Cr - 1.3 Cr', pricePerSqFt: '6.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Navadweepa', priceRange: '1.1 Cr - 1.4 Cr', pricePerSqFt: '6.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Constructions', priceRange: '1.05 Cr - 1.35 Cr', pricePerSqFt: '6.3/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Sunrise', priceRange: '1.15 Cr - 1.45 Cr', pricePerSqFt: '6.8/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Kondapur', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Lake City', priceRange: '1.2 Cr - 1.5 Cr', pricePerSqFt: '7.0/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Avatar', priceRange: '1.25 Cr - 1.55 Cr', pricePerSqFt: '7.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Hillpark', priceRange: '1.15 Cr - 1.45 Cr', pricePerSqFt: '6.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi Usharam', priceRange: '1.1 Cr - 1.4 Cr', pricePerSqFt: '6.5/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Chandanagar', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '90 L - 1.2 Cr', pricePerSqFt: '5.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Jewel', priceRange: '95 L - 1.25 Cr', pricePerSqFt: '5.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Sarovar', priceRange: '92 L - 1.22 Cr', pricePerSqFt: '5.6/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Lakeside', priceRange: '98 L - 1.28 Cr', pricePerSqFt: '5.9/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Tellapur', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '85 L - 1.1 Cr', pricePerSqFt: '5.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Navadweepa', priceRange: '88 L - 1.15 Cr', pricePerSqFt: '5.4/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Constructions', priceRange: '90 L - 1.18 Cr', pricePerSqFt: '5.6/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi GP Trends', priceRange: '87 L - 1.12 Cr', pricePerSqFt: '5.3/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Nallagandla', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Lake City', priceRange: '1.1 Cr - 1.4 Cr', pricePerSqFt: '6.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Bhooja', priceRange: '1.15 Cr - 1.45 Cr', pricePerSqFt: '6.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Hillpark', priceRange: '1.05 Cr - 1.35 Cr', pricePerSqFt: '6.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Sunrise', priceRange: '1.2 Cr - 1.5 Cr', pricePerSqFt: '7.0/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Hafeezpet', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '95 L - 1.25 Cr', pricePerSqFt: '5.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Avatar', priceRange: '1.0 Cr - 1.3 Cr', pricePerSqFt: '6.0/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Sarovar', priceRange: '98 L - 1.28 Cr', pricePerSqFt: '5.9/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi Usharam', priceRange: '92 L - 1.22 Cr', pricePerSqFt: '5.6/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Bachupally', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '88 L - 1.15 Cr', pricePerSqFt: '5.4/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Jewel', priceRange: '92 L - 1.2 Cr', pricePerSqFt: '5.7/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Constructions', priceRange: '85 L - 1.12 Cr', pricePerSqFt: '5.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Lakeside', priceRange: '90 L - 1.18 Cr', pricePerSqFt: '5.5/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Kompally', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '82 L - 1.05 Cr', pricePerSqFt: '5.0/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Navadweepa', priceRange: '85 L - 1.1 Cr', pricePerSqFt: '5.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Sarovar', priceRange: '88 L - 1.15 Cr', pricePerSqFt: '5.4/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi GP Trends', priceRange: '80 L - 1.02 Cr', pricePerSqFt: '4.8/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Alwal', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '75 L - 95 L', pricePerSqFt: '4.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Avatar', priceRange: '78 L - 98 L', pricePerSqFt: '4.7/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Hillpark', priceRange: '80 L - 1.0 Cr', pricePerSqFt: '4.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Sunrise', priceRange: '72 L - 92 L', pricePerSqFt: '4.3/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Shamirpet', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '70 L - 90 L', pricePerSqFt: '4.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Jewel', priceRange: '72 L - 92 L', pricePerSqFt: '4.3/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Constructions', priceRange: '75 L - 95 L', pricePerSqFt: '4.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi Usharam', priceRange: '68 L - 88 L', pricePerSqFt: '4.0/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Financial District', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Lake City', priceRange: '1.5 Cr - 1.8 Cr', pricePerSqFt: '8.5/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Bhooja', priceRange: '1.6 Cr - 1.9 Cr', pricePerSqFt: '9.0/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Sarovar', priceRange: '1.45 Cr - 1.75 Cr', pricePerSqFt: '8.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Prestige Lakeside', priceRange: '1.55 Cr - 1.85 Cr', pricePerSqFt: '8.8/sq.ft', image: '/mainimage.jpg' }
    ]
  },
  { 
    name: 'Narsingi', 
    projectsVisible: false,
    image: '/mainimage.jpg',
    properties: [
      { name: 'Incor Hills', priceRange: '1.0 Cr - 1.3 Cr', pricePerSqFt: '6.0/sq.ft', image: '/mainimage.jpg' },
      { name: 'My Home Navadweepa', priceRange: '1.05 Cr - 1.35 Cr', pricePerSqFt: '6.2/sq.ft', image: '/mainimage.jpg' },
      { name: 'Aparna Hillpark', priceRange: '98 L - 1.28 Cr', pricePerSqFt: '5.8/sq.ft', image: '/mainimage.jpg' },
      { name: 'Vasavi GP Trends', priceRange: '1.1 Cr - 1.4 Cr', pricePerSqFt: '6.5/sq.ft', image: '/mainimage.jpg' }
    ]
  },
];

const ExploreByLocation: React.FC = () => {
  const [locationsState, setLocationsState] = useState(locations);
  const [activeLocationIndex, setActiveLocationIndex] = useState<number | null>(null);

  const toggleProjects = (index: number) => {
    // Close if clicking the same location, otherwise open the new one
    setActiveLocationIndex(activeLocationIndex === index ? null : index);
  };

  // Helper function to determine which row a location is in (for 3-column grid)
  const getRowIndex = (index: number) => Math.floor(index / 3);
  const getLastIndexInRow = (rowIndex: number) => Math.min((rowIndex + 1) * 3 - 1, locationsState.length - 1);

  // Group locations by rows for rendering
  const locationRows: Location[][] = [];
  for (let i = 0; i < locationsState.length; i += 3) {
    locationRows.push(locationsState.slice(i, i + 3));
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-16 bg-gray-50">
      {/* Heading and Subtext */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 inline-block">Explore by Locations</h2>
        <p className="text-gray-600 mt-2">
          Find projects and ventures by areas of Hyderabad
        </p>
      </div>

      {/* Grid with Rows */}
      <div className="max-w-6xl mx-auto">
        {locationRows.map((row, rowIndex) => (
          <div key={rowIndex}>
            {/* Location Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {row.map((location, colIndex) => {
                const locationIndex = rowIndex * 3 + colIndex;
                return (
                  <div key={locationIndex} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    {/* Location Header with Dropdown */}
                    <div 
                      onClick={() => toggleProjects(locationIndex)}
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <p className="font-semibold text-gray-900 capitalize">{location.name}</p>
                      <svg 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          activeLocationIndex === locationIndex ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full-Width Dropdown Row */}
            {activeLocationIndex !== null && 
             getRowIndex(activeLocationIndex) === rowIndex && 
             locationsState[activeLocationIndex]?.properties && 
             locationsState[activeLocationIndex].properties.length > 0 && (
              <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm mb-4 overflow-hidden">
                {/* Location Info Header */}
                <div className="p-4 bg-gray-50 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 capitalize mb-1">
                      {locationsState[activeLocationIndex].name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {locationsState[activeLocationIndex].properties.length} Projects • Avg. price ({locationsState[activeLocationIndex].properties[0]?.pricePerSqFt}) • 25 Builders
                    </p>
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center">
                    See all 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="p-4">
                  <div className="flex items-center space-x-4">
                    {/* Left Navigation Arrow */}
                    <button className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Property Cards Container */}
                    <div className="flex-1 overflow-x-auto scrollbar-hide">
                      <div className="flex space-x-4 pb-2">
                        {/* Property Cards */}
                        {locationsState[activeLocationIndex].properties.slice(0, 4).map((property, propertyIndex) => (
                          <div key={propertyIndex} className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            {/* Property Image */}
                            <div className="relative h-40 w-full">
                              <Image 
                                src={property.image} 
                                alt={property.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            
                            {/* Property Details */}
                            <div className="p-4">
                              <h4 className="font-semibold text-gray-900 text-base mb-2 truncate">
                                {property.name}
                              </h4>
                              <p className="text-sm text-gray-600 mb-1">
                                {property.priceRange}
                              </p>
                              <p className="text-sm text-gray-500">
                                ₹{property.pricePerSqFt}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Navigation Arrow */}
                    <button className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default ExploreByLocation;
