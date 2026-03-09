import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubLink, liveLink } = project;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-600">
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
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
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
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} className="text-gray-900" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;