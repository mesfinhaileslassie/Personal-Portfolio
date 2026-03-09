import { Code2, Server, Wrench, Zap, Shield, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={32} className="text-blue-600 dark:text-blue-400" />,
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React.js", level: 80 },
        { name: "Python", level: 90 },
        { name: "HTML5/CSS3", level: 86 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={32} className="text-purple-600 dark:text-purple-400" />,
      description: "Creating robust server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 80 },
       { name: "PHP", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={32} className="text-green-600 dark:text-green-400" />,
      description: "Essential tools I use daily for development",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. 
            Here's my tech toolbox - constantly evolving and expanding.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                {category.description}
              </p>

              {/* Skills List with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Banner */}
        <div className="mt-16 p-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Sparkles size={40} className="text-white/80" />
              <div>
                <h4 className="text-xl font-semibold mb-1">Continuous Learning</h4>
                <p className="text-white/80">Always exploring new technologies and best practices</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">7+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;