import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Node.js", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Spring Boot", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 82, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Express", level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Technical <span className="text-white">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mastering modern technologies to build exceptional digital experiences
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800 transition-all duration-300 hover:scale-[1.03] hover:border-neutral-700"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shadow-inner">
                            <img 
                              src={skill.logo} 
                              alt={skill.name}
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-white transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white text-center mb-10">
              Additional <span className="text-white">Technologies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
                { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
                { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
