import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: "Founding Frontend & Full-Stack Engineer",
      company: "Fastpinger",
      location: "United Kingdom",
      period: "2025 - 2026",
      description:
        "Built and maintained responsive, high-quality user interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS, ensuring seamless cross-browser and cross-device functionality.",
      achievements: [
        "Translated Figma designs into pixel-perfect, accessible components with clear component architecture and state management via React hooks and Context API",
        "Developed and consumed RESTful APIs, handling async data fetching and error states for a smooth user experience",
        "Collaborated with Machine Learning engineers and stakeholders to deliver AI-driven lead generation features aligned with business goals",
        "Integrated WhatsApp Cloud API (Meta) to power automated messaging workflows on the frontend"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "REST API", "WhatsApp Cloud API", "Figma"],
      type: "Full-time"
    },
    {
      position: "Founding Backend Engineer (Frontend Collaboration)",
      company: "Akipath Technologies Inc",
      location: "Ontario, Canada",
      period: "2025",
      description:
        "Collaborated closely with frontend engineers, designing clean REST API contracts that enabled rapid, reliable UI integration for a rental identity-verification platform.",
      achievements: [
        "Worked with a cross-functional team including product managers and ML engineers to ship features aligned with user experience goals",
        "Integrated third-party APIs (Cloudinary, Google Maps, payment gateway), contributing to frontend-facing data flows",
        "Designed backend services that supported seamless frontend integration and user workflows"
      ],
      technologies: ["REST API", "Cloudinary", "Google Maps", "Payment Gateway", "Java", "Spring Boot"],
      type: "Full-time"
    },
    {
      position: "Software Engineer",
      company: "Omnicron Technologies",
      location: "Lagos, Nigeria",
      period: "Feb 2025 - July 2025",
      description:
        "Designed and developed responsive user interfaces with React.js and scalable backend services with Spring Boot. Collaborated with cross-functional teams to deliver business-aligned solutions.",
      achievements: [
        "Built and maintained full-stack applications using React, Spring Boot, and PostgreSQL",
        "Containerized backend services with Docker for efficient deployment",
        "Contributed to high-quality codebase through reviews and documentation",
        "Worked in an agile team with sprint planning and iterative development"
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Docker", "Git"],
      type: "Contract"
    },
    {
      position: "Software Engineer",
      company: "Semicolon Africa",
      location: "Lagos, Nigeria",
      period: "Feb 2024 - Feb 2025",
      description:
        "Developed backend services with Spring Boot and built responsive frontends with React. Contributed to financial app features, payments integration, and agile development practices.",
      achievements: [
        "Implemented auto-savings and wallet transfer features with Paystack integration",
        "Designed scalable backend services and containerized deployments with Docker",
        "Applied TDD with JUnit to improve reliability and maintainability",
        "Documented APIs with Postman for developer-friendly integration"
      ],
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "MySQL", "MongoDB", "Docker", "JUnit", "Git"],
      type: "Full-time"
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Background grid in pure white lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Professional <span className="text-white">Journey</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto px-4">
              Hands-on experience building scalable, impactful software solutions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-white hidden lg:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 w-4 h-4 bg-white rounded-full border-4 border-black hidden lg:block"></div>

                  {/* Card */}
                  <div className="lg:ml-16">
                    <div className="bg-white text-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="text-xl sm:text-2xl font-bold">{experience.position}</h3>
                            <span className="px-3 py-1 bg-black text-white rounded-full text-xs sm:text-sm font-medium w-fit">
                              {experience.type}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-black/70 text-sm sm:text-base">
                            <div className="flex items-center space-x-2">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium">{experience.company}</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-black/70 mt-3 lg:mt-0 text-sm sm:text-base">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{experience.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">{experience.description}</p>

                      {/* Achievements */}
                      <div className="mb-6 sm:mb-8">
                        <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                          <h4 className="font-bold text-sm sm:text-base">Key Achievements</h4>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                          {experience.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 border border-black/10 rounded-lg sm:rounded-xl hover:bg-black hover:text-white transition-colors duration-300"
                            >
                              <div className="w-2 h-2 bg-black rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="text-xs sm:text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 border border-black text-black rounded-full text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
