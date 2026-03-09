import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  // You can update these with your information
  const name = "Mesfin Haileslassie";
  const roles = ["Full Stack Developer", "React Specialist", "Problem Solver"];
  const description = "I build exceptional digital experiences that make a difference. With expertise in modern web technologies, I turn ideas into reality.";
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Greeting */}
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 animate-fade-in inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            👋 Welcome to my portfolio
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in animation-delay-200 text-gray-900 dark:text-white">
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              {name}
            </span>
          </h1>

          {/* Dynamic Roles */}
          <div className="h-16 mb-6">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              I'm a{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400 relative">
                {roles[0]}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 animate-width"></span>
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in animation-delay-400">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in animation-delay-600">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={18} className="animate-bounce" />
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <a 
              href="https://github.com/mesfinhaileslassie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mesfin-haileslassie-b2105133a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="mailto:mesfinhaileslassie17@gmail.com" 
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">React</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">Tailwind</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">MongoDB</span>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
          <div className="relative group">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <img 
                src="/profile.jpg" 
                alt="Mesfin Haileslassie"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400?text=Mesfin';
                }}
              />
              
              {/* Overlay with status */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-float">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-float animation-delay-2000">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block"
        aria-label="Scroll down"
      >
        <div className="w-10 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
          <ArrowDown className="text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" size={20} />
        </div>
      </a>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes width {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-width {
          animation: width 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;