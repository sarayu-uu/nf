import React, { useState } from 'react';
import ProjectNavigation from './ProjectNavigation';

interface Location {
  name: string;
  projectsVisible: boolean; // Add state to track project visibility
}

const locations: Location[] = [
  { name: 'nanakaramguda', projectsVisible: false },
  { name: 'gachibowli', projectsVisible: false },
  { name: 'patancheru', projectsVisible: false },
  { name: 'kukatpally', projectsVisible: false },
  { name: 'miyapur', projectsVisible: false },
  { name: 'madhapur', projectsVisible: false },
  { name: 'manikonda', projectsVisible: false },
  { name: 'kondapur', projectsVisible: false },
  { name: 'chandanagar', projectsVisible: false },
  { name: 'tellapur', projectsVisible: false },
  { name: 'nallagandla', projectsVisible: false },
  { name: 'hafeezpet', projectsVisible: false },
  { name: 'bachupally', projectsVisible: false },
  { name: 'kompally', projectsVisible: false },
  { name: 'alwal', projectsVisible: false },
  { name: 'shamirpet', projectsVisible: false },
  { name: 'financial district', projectsVisible: false },
  { name: 'narsingi', projectsVisible: false },
];

const ExploreByLocation: React.FC = () => {
  const [locationsState, setLocationsState] = useState(locations);

  const toggleProjects = (index: number) => {
    const updatedLocations = [...locationsState];
    updatedLocations[index].projectsVisible = !updatedLocations[index].projectsVisible;
    setLocationsState(updatedLocations);
  };

  return (
  <div className="px-4 md:px-8 lg:px-16">
    {/* Heading and Subtext */}
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-black">Explore by Locations</h2>
      <p className="text-gray-600 mt-2">
        Find projects and ventures by areas of Hyderabad
      </p>
    </div>

    {/* Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {locationsState.map((location, index) => (
        <div key={index} className="border p-4 rounded-lg shadow">
          <div onClick={() => toggleProjects(index)}>
            <p className="font-bold cursor-pointer text-black">{location.name}</p>
          </div>
          {location.projectsVisible && <ProjectNavigation />}
        </div>
      ))}
    </div>
  </div>
);


};


export default ExploreByLocation;
