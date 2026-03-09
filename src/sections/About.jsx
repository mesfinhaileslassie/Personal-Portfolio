import { User, Award, Code, Briefcase, GraduationCap, Heart, Mail, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const personalInfo = {
    name: "Mesfin Haileslassie",
    title: "Full Stack Developer",
    location: "Debre Birhan, Ethiopia",
    email: "mesfinhaileslassie17@gmail.com",
    phone: "+251992116527",
    experience: "3+ Years",
    projects: "7+",
    
  };

  const bio = "I’m Mesfin, a third-year Computer Science student at Debre Birhan University with a strong interest in web development and modern software technologies. I enjoy building projects that combine programming, problem-solving, and creativity. My interests include Python, web development, and artificial intelligence, and I like exploring new tools and frameworks to improve my skills. Through my GitHub, I share my projects, learning journey, and practical implementations of the concepts I study. I’m always eager to learn, collaborate, and grow as a developer while creating useful and impactful software. 🚀";

  const whatIDo = [
    {
      icon: <Code className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with HTML, JS , React ,CSS"
    },
    {
      icon: <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and various databases"
    },
    {
      icon: <Award className="text-green-600 dark:text-green-400" size={24} />,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with Figma and implementing pixel-perfect designs"
    },
    {
      icon: <GraduationCap className="text-orange-600 dark:text-orange-400" size={24} />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices in web development"
    }
  ];

  const interests = [
    "Open Source",
    "Tech Blogging",
    "Gaming",
    "Music",
    "Photography",
    "Travel",
    "Coffee",
    "Reading"
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "Debre Birhan University",
      Expected_Gratuation:"Expected gratuate at 2027",
      description: "Focused on software engineering and web technologies"
    }
  ];

  const achievements = [
    "Completed 6+ successful projects",
    "Contributor to open source projects",
    "Active member of developer community"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my journey, passion, and what drives me as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              {/* Profile Image Placeholder */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl text-white">MH</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-center text-blue-600 dark:text-blue-400 mb-4">
                {personalInfo.title}
              </p>

              {/* Personal Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MapPin size={18} className="shrink-0" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Mail size={18} className="shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="text-sm hover:text-blue-600 dark:hover:text-blue-400">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Calendar size={18} className="shrink-0" />
                  <span className="text-sm">{personalInfo.experience} experience</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{personalInfo.experience}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Experience</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{personalInfo.projects}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{personalInfo.clients}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Clients</p>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">Available for work</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Open to new opportunities and collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Bio, What I Do, etc. */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <User className="text-blue-600 dark:text-blue-400" size={24} />
                My Story
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {bio}
              </p>
            </div>

            {/* What I Do Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                What I Do
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatIDo.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{edu.Expected_Gratuation}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Interests & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interests */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Heart className="text-blue-600 dark:text-blue-400" size={24} />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                  Achievements
                </h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            

            {/* Fun Fact */}
            <div  className="bg-linear-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <p className="text-lg font-medium mb-2">💡 Fun Fact</p>
              <p className="text-white/90">
                When I'm not coding, you can find me exploring new coffee shops, 
                contributing to open source projects, or playing strategy games!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;