import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

import project1 from './1.png'
import project2 from './2.png'
import project3 from './3.png'
import project4 from './4.png'
import project5 from './5.png'
import project6 from './6.png'
import project8 from './8.png'

const projects = [
  {
    title: "Business Buddy",
    description: "Business Buddy is a platform that helps small businesses with website building, social media integration, AI-powered content generation, e-commerce management, and analytics.",
    image: project1,
    technologies: ["React", "Node.js","Express js","Material UI", "ShadCN","Meta GraphApi", "MongoDB", "Stripe"],
    githubLink: "https://github.com/HAhsanUllah/Business-Buddy",
    liveLink: "https://github.com/HAhsanUllah/Business-Buddy"
  },
  {
    title: "PayMaster Pro",
    description: "Paymaster pro within Business Buddy streamlines payment processing, invoicing, and financial tracking for small businesses, and team collaboration features.",
    image: project2,//images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "Node.js","Express js","Material UI","Stripe"],  
    githubLink: "https://github.com/HAhsanUllah/Business-Buddy",
    liveLink: "https://github.com/HAhsanUllah/Business-Buddy"
  },
  {
    title: "Ecommerce Management Dashboard",
    description: "Ecommerce Management Dashboard is a web App that streamlines product inventory, order tracking, and sales analytics for efficient online store management.",
    image: project6,
    technologies: ["React", "Node.js","Express js","Material UI",],
    githubLink: "https://github.com/HAhsanUllah/Business-Buddy",
    liveLink: "https://github.com/HAhsanUllah/Business-Buddy"
  },
  {
    title: "Admin Sphere",
    description: "AdminSphere is a comprehensive dashboard designed to streamline and manage all admin activities efficiently.",
    image: project5,
    technologies: ["React", "Node.js","Express js","Tailwind CSS", "MongoDB"],
    githubLink: "https://github.com/HAhsanUllah/Business-Buddy",
    liveLink: "https://github.com/HAhsanUllah/Business-Buddy"
  },
  {
    title: "University Hub",
    description: "UniversityHub is a robust platform for managing student records, courses, faculty, and administrative tasks in a university setting",
    image: project4,
    technologies: ["React", "Node.js","Express js","ShadCN", "MongoDB", "Material UI"],
    githubLink: "https://github.com/HAhsanUllah/Business-Buddy",
    liveLink: "https://github.com/HAhsanUllah/Business-Buddy"
  },
  {
    title: "SocialAuto Pilot",
    description: "AutoSocial is an intelligent tool for automating and scheduling social media posts, ensuring consistent engagement across platforms",
    image: project8,
    technologies: ["React", "Node.js","Express js","ShadCN", "MongoDB", "Material UI"],
    githubLink: "https://github.com/HAhsanUllah/Business-Buddy",
    liveLink: "https://github.com/HAhsanUllah/Business-Buddy"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border-4 border-dark:bg-gray-900/90" // Increased border width to 4 and applied dark:bg-gray-900/90 color
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Projects;