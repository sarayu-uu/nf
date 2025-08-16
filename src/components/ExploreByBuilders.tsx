import React from 'react';

const ExploreByBuilders: React.FC = () => {
  const builderCards = [
    { id: 1, name: "Prestige Group", link: "#" },
    { id: 2, name: "DLF Ltd.", link: "#" },
    { id: 3, name: "Godrej Properties", link: "#" },
    { id: 4, name: "Sobha Ltd.", link: "#" },
  ];

  const propertyCards = [
    {
      id: 1,
      image: "/mbh2.jpeg", // Placeholder image
      rera: "RERA",
      title: "Luxury Villa in Jubilee Hills 24 floors",
      details: "2,940 sq ft • 4 BHK • 3 Bath • Ready to Move",
      price: "₹2.5 Cr",
      pricePerSqFt: "₹8,500/sq ft",
      builder: "By Prestige Group",
    },
    {
      id: 2,
      image: "/mbh3.jpeg", // Placeholder image
      rera: "RERA",
      title: "Modern Apartment in Banjara Hills",
      details: "1,800 sq ft • 3 BHK • 2 Bath • Under Construction",
      price: "₹1.2 Cr",
      pricePerSqFt: "₹6,667/sq ft",
      builder: "By DLF Ltd.",
    },
    {
      id: 3,
      image: "/mbh4.avif", // Placeholder image
      rera: "RERA",
      title: "Spacious Penthouse in Gachibowli",
      details: "4,500 sq ft • 5 BHK • 5 Bath • New Launch",
      price: "₹4.0 Cr",
      pricePerSqFt: "₹8,889/sq ft",
      builder: "By Godrej Properties",
    },
    {
      id: 4,
      image: "/mhb1.jpeg", // Placeholder image
      rera: "RERA",
      title: "Elegant Row House in Kondapur",
      details: "2,200 sq ft • 3 BHK • 3 Bath • Ready to Move",
      price: "₹1.8 Cr",
      pricePerSqFt: "₹8,182/sq ft",
      builder: "By Sobha Ltd.",
    },
    {
      id: 5,
      image: "/mbh2.jpeg", // Placeholder image
      rera: "RERA",
      title: "Luxury Villa in Jubilee Hills 24 floors",
      details: "2,940 sq ft • 4 BHK • 3 Bath • Ready to Move",
      price: "₹2.5 Cr",
      pricePerSqFt: "₹8,500/sq ft",
      builder: "By Prestige Group",
    },
    {
      id: 6,
      image: "/mbh3.jpeg", // Placeholder image
      rera: "RERA",
      title: "Modern Apartment in Banjara Hills",
      details: "1,800 sq ft • 3 BHK • 2 Bath • Under Construction",
      price: "₹1.2 Cr",
      pricePerSqFt: "₹6,667/sq ft",
      builder: "By DLF Ltd.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 inline-block">Explore by Builders</h2>
      </div>

      {/* Top Row (Builders Section) */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {builderCards.map((card) => (
          <div
            key={card.id}
            className="flex items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64"
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
            <div>
              <p className="text-base font-medium text-gray-700">By {card.name}</p>
              <a href={card.link} className="text-teal-600 text-sm hover:underline">
                Visit Website &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row (Property Carousel Section) */}
      <div className="rounded-xl p-8 relative">
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
          {propertyCards.map((card) => (
            <div
              key={card.id}
              className="flex-none w-60 bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
              <span className="absolute top-2 left-2 bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded">
                {card.rera}
              </span>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 text-black">{card.title}</h3>
                <p className="text-black text-sm mb-2">{card.details}</p>
                <p className="font-bold text-lg mb-1 text-black">
                  {card.price}{" "}
                  <span className="text-gray-500 text-sm font-normal">({card.pricePerSqFt})</span>
                </p>
                <p className="text-black text-sm">{card.builder}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows - Basic placeholders for now */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          &#9664;
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          &#9654;
        </button>
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-16">
        <button className="px-8 py-3 border border-teal-600 text-teal-600 bg-white rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-300">
          View all Plots
        </button>
      </div>
    </section>
  );
};

export default ExploreByBuilders;
