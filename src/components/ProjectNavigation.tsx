import React from 'react';

interface Project {
  name: string;
  image: string; // Add image URL
}

const projects: Project[] = [
  // Sample project data - replace with actual data
  { name: 'Project A', image: '/images/projectA.jpg' },
  { name: 'Project B', image: '/images/projectB.jpg' },
  { name: 'Project C', image: '/images/projectC.jpg' },
  { name: 'Project D', image: '/images/projectD.jpg' },
  { name: 'Project E', image: '/images/projectE.jpg' },
  { name: 'Project F', image: '/images/projectF.jpg' },
];

const ProjectNavigation: React.FC = () => {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory">
      {projects.map((project, index) => (
        <div key={index} className="snap-start w-64 flex-shrink-0 p-2">
          <p>{project.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectNavigation;
