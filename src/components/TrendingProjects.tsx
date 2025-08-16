import Image from "next/image";

type Project = {
  id: number;
  title: string;
  image: string;
  badge: string;
  badgeColor: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  status: string;
  price: string;
  pricePerSqFt: string;
  builder: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Villa in Jubilee Hills 24 floors",
    image: "/mainimage.jpg",
    badge: "FEATURED",
    badgeColor: "bg-yellow-500",
    area: "2,940 sq ft",
    bedrooms: "4 BHK",
    bathrooms: "3 Bath",
    status: "Ready to Move",
    price: "₹2.5 Cr",
    pricePerSqFt: "₹8,500/sq ft",
    builder: "By Prestige Group",
  },
  {
    id: 2,
    title: "Luxury Villa in Jubilee Hills 24 floors",
    image: "/mainimage.jpg",
    badge: "FEATURED",
    badgeColor: "bg-yellow-500",
    area: "2,940 sq ft",
    bedrooms: "4 BHK",
    bathrooms: "3 Bath",
    status: "Ready to Move",
    price: "₹2.5 Cr",
    pricePerSqFt: "₹8,500/sq ft",
    builder: "By Prestige Group",
  },
  {
    id: 3,
    title: "Luxury Villa in Jubilee Hills 24 floors",
    image: "/mainimage.jpg",
    badge: "RERA",
    badgeColor: "bg-blue-600",
    area: "2,940 sq ft",
    bedrooms: "4 BHK",
    bathrooms: "3 Bath",
    status: "Ready to Move",
    price: "₹2.5 Cr",
    pricePerSqFt: "₹8,500/sq ft",
    builder: "By Prestige Group",
  },
  {
    id: 4,
    title: "Luxury Villa in Jubilee Hills 24 floors",
    image: "/mainimage.jpg",
    badge: "RERA",
    badgeColor: "bg-blue-600",
    area: "2,940 sq ft",
    bedrooms: "4 BHK",
    bathrooms: "3 Bath",
    status: "Ready to Move",
    price: "₹2.5 Cr",
    pricePerSqFt: "₹8,500/sq ft",
    builder: "By Prestige Group",
  },
  {
    id: 5,
    title: "Luxury Villa in Jubilee Hills 24 floors",
    image: "/mainimage.jpg",
    badge: "RERA",
    badgeColor: "bg-blue-600",
    area: "2,940 sq ft",
    bedrooms: "2 BHK",
    bathrooms: "2 Bath",
    status: "Ready to Move",
    price: "₹1.5 Cr",
    pricePerSqFt: "₹9,090/sq ft",
    builder: "By Aliens Group",
  },
];

export default function TrendingProjects() {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 inline-block">
          Trending Projects
        </h2>
        <p className="text-gray-600 mt-2">
          Explore top living options with us
        </p>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* First Row - 2 Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-8 justify-items-center">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="flex bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full max-w-lg"
            >
              {/* Left - Image */}
              <div className="relative w-1/2 h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute top-3 left-3 ${project.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}
                >
                  {project.badge}
                </div>
              </div>

              {/* Right - Content */}
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <h3 className="text-base font-bold text-gray-900 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {project.area} • {project.bedrooms} • {project.bathrooms}
                </p>
                <p className="text-xs text-gray-600">{project.status}</p>
                <p className="text-base font-bold text-gray-900">
                  {project.price}{" "}
                  <span className="text-xs text-gray-500">
                    ({project.pricePerSqFt})
                  </span>
                </p>
                <p className="text-xs text-gray-500">{project.builder}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Vertical Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center">
          {projects.slice(2, 5).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full max-w-xs"
            >
              {/* Image */}
              <div className="relative h-36 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute top-3 left-3 ${project.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}
                >
                  {project.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {project.area} • {project.bedrooms} • {project.bathrooms}
                </p>
                <p className="text-xs text-gray-600">{project.status}</p>
                <p className="text-base font-bold text-gray-900">
                  {project.price}{" "}
                  <span className="text-xs text-gray-500">
                    ({project.pricePerSqFt})
                  </span>
                </p>
                <p className="text-xs text-gray-500">{project.builder}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition">
            View all Featured Properties →
          </button>
        </div>
      </div>
    </section>
  );
}
