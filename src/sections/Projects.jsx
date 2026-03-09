import { Github, ExternalLink } from 'lucide-react';
import projects from '../projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases different skills and technologies.
            Click on any project to learn more or view the live demo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubLink, liveLink } = project;

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-600 to-purple-600">
            <span className="text-white text-4xl font-bold">{title.charAt(0)}</span>
          </div>
        )}
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
              aria-label="GitHub Repository"
            >
              <Github size={20} className="text-gray-900" />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} className="text-gray-900" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;