import React from 'react';

const ProjectsByBudget: React.FC = () => {
  return (
    // Outer container for the section (py-24 for increased vertical padding, px-16 for increased horizontal padding)
    <section className="py-24 px-16">
      {/* Header row for title and link (mb-8 for bottom margin) */}
      {/* mx-auto: centers the header and link container */}
      {/* max-w-6xl: limits the width of the header container */}
      <div className="mx-auto max-w-6xl flex justify-between items-center mb-8">
        {/* Title (text-2xl font-bold for size and weight, text-left for alignment, text-black for color) */}
        <h2 className="text-3xl font-bold text-gray-800 inline-block">Projects by Budget</h2>
        {/* See all link (text-blue-600 for color, hover:underline for interaction) */}
        <a href="#" className="text-teal-600 hover:underline">
          See all &rarr;
        </a>
      </div>

      {/* Cards container (flex for horizontal alignment, justify-between for spacing, gap-4 for spacing between cards) */}
      {/* mx-auto: centers the cards container */}
      {/* max-w-6xl: limits the width of the cards container */}
      <div className="mx-auto max-w-6xl flex justify-between gap-4">
        {/* Card 1 */}
        <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-6"> {/* p-6 for increased padding, flex-1 for equal width */}
          {/* Main heading (text-lg font-bold for size and weight, mb-1 for bottom margin, text-black for color) */}
          <h3 className="text-lg font-bold mb-1 text-black">50-70 Lacs</h3>
          {/* Smaller text (text-black for color, text-sm for smaller size) */}
          <p className="text-black text-sm">24 Properties • ₹8,500-10,000/sq ft</p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-bold mb-1 text-black">70-90 Lacs</h3>
          <p className="text-black text-sm">18 Properties • ₹10,000-12,000/sq ft</p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-bold mb-1 text-black">90 Lacs - 1.2 Cr</h3>
          <p className="text-black text-sm">15 Properties • ₹12,000-15,000/sq ft</p>
        </div>

        {/* Card 4 */}
        <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-bold mb-1 text-black">1.2 Cr - 1.5 Cr</h3>
          <p className="text-black text-sm">10 Properties • ₹15,000-18,000/sq ft</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsByBudget;
