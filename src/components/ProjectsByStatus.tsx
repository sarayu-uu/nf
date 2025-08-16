// components/ProjectsByStatus.tsx
import React, { FC, ReactNode } from "react";
import Link from "next/link";

interface StatusCardProps {
  id: number;
  icon: ReactNode;
  title: string;
  properties: string;
  priceRange: string;
}

const StatusCard: FC<StatusCardProps> = ({ icon, title, properties, priceRange }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-gray-600 text-sm mb-1">{properties}</p>
    <p className="text-gray-700 font-medium">{priceRange}</p>
  </div>
);

const ProjectsByStatus: FC = () => {
  const statusCards: StatusCardProps[] = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Ready to move-in",
      properties: "120 Properties",
      priceRange: "₹50 L - ₹2 Cr",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 
               2 0 110 4m-6 8a2 2 0 100-4m0 
               4a2 2 0 110-4m0 4v2m0-6V4m6 
               6v10m6-2a2 2 0 100-4m0 4a2 
               2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Under Construction",
      properties: "80 Properties",
      priceRange: "₹30 L - ₹1.5 Cr",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Pre-Launch Offer",
      properties: "50 Properties",
      priceRange: "₹20 L - ₹1 Cr",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-8 h-8 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 
               1.998 0 01-2.827 0l-4.244-4.243a8 
               8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Near IT corridor",
      properties: "150 Properties",
      priceRange: "₹60 L - ₹3 Cr",
    },
  ];

  return (
    // Outer container for the entire section
    // my-16: increased margin-top and margin-bottom
    // px-16: increased padding-left and padding-right
    <section className="my-16 px-16">
      {/* Section header */}
      {/* mx-auto: centers the header and link container */}
      {/* max-w-6xl: limits the width of the header container */}
      <div className="mx-auto max-w-6xl flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 inline-block">Projects by Status</h2>
        <Link
          href="#"
          className="text-teal-600 font-semibold hover:underline"
        >
          See all →
        </Link>
      </div>

      {/* Cards */}
      {/* mx-auto: centers the cards container */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statusCards.map((card) => (
          <StatusCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsByStatus;
