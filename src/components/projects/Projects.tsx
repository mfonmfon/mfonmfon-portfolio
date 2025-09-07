import React from "react";
import { ExternalLink, Github, Star, Eye } from "lucide-react";
import  QuilifyProjectImages from  '../../assets/projectsimages/Screenshot (703).png'
import TheCareerCoreImage from '../../assets/projectsimages/thecareercore.png'
import HomeBookImage from '../../assets/projectsimages/HomeBook.png'
import WalletImage from '../../assets/projectsimages/walletdashboard.jpg'
import TherapyAppImage from '../../assets/projectsimages/Therapy.png'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Blog Platform",
      description:
        "Designed and developed a full-stack blog application with a React frontend, Java Spring Boot backend, and MySQL database. Key features include secure user authentication, blog creation, editing, and management, providing a seamless end-to-end blogging experience.",
      image: QuilifyProjectImages,
      technologies: ["React", "Java", "MySQL", "SpringBoot"],
      liveUrl: "https://quillify-nine.vercel.app/",
      githubUrl: "https://github.com/mfonmfon/quillify.git",
      featured: true,
      stats: { stars: 124, views: "2.1k" },
    },
    {
      title: "Real Estate Application",
      description:
        "Developed a real estate application using Next.js and PostgreSQL. Features include property listings, advanced search and filtering, real-time updates on availability, user accounts for buyers and agents, and detailed property analytics",
      image:
        HomeBookImage,
      technologies: [
        "React",
        "JavaScript",
        "PostgreSQL",
        "Tailwind",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 89},
    },
    {
      title: "An Event Registration Website",
      description:
        "Developed a full-stack event registration platform with a Java SpringBoot backend and React frontend. Features include attendee registration, sponsor sign-up, event management, and an intuitive interface for tracking participation",
      image: TheCareerCoreImage,
      technologies: ["Java", "SpringBoot", "React", "Material UI"],
      liveUrl: "thecareercore.africa",
      githubUrl: "https://github.com/mfonmfon/thecareercore-frontend.git",
      featured: false,
      stats: { stars: 67, views: "1.2k" },
    },
    {
      title: "Wallet API",
      description:
        "Developed a RESTful API with Spring Boot for a digital wallet application. Integrated Paystack for secure payments and Twilio for SMS notifications. Implemented core features such as JWT authentication, wallet-to-wallet transfers, wallet-to-bank transfers, transaction history, and real-time notifications.",
      image:
        WalletImage,
      technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Docker", "Paystack", "Twilio", "Postman"],
      liveUrl: "https://github.com/mfonmfon/Pocketsave.git",
      githubUrl: "https://github.com/mfonmfon/Pocketsave.git",
      featured: false,
      stats: { stars: 45, views: "890" },
    },
    {
      title: "Therapy Booking Platform",
      description:
        "A web application that allows users to book therapy sessions with licensed therapists. Built with React, Node.js, and MongoDB, the platform provides a seamless user experience, secure payment processing, and a dedicated therapist dashboard for managing bookings and sessions.",
      image:
        TherapyAppImage,
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      liveUrl: "https://github.com/nelllyx/Anon-FE.git",
      githubUrl: "https://github.com/nelllyx/Anon-FE.git",
      featured: false,
      stats: { stars: 78, views: "1.5k" },
    },
    
  ];

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Featured <span className="text-white">Projects</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A showcase of my recent work demonstrating full-stack development
              expertise
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white text-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Project Stats */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <div className="bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1 text-black text-xs font-medium">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1 text-black text-xs font-medium">
                        <Eye className="w-3 h-3" />
                        <span>{project.stats.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6 leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 border border-black rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-6 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 font-medium"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group bg-white text-black rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Mini Stats */}
                    <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1 text-black text-xs">
                      <Star className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                    <p className="text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 border border-black text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 border border-black text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="flex items-center justify-center flex-1 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center justify-center flex-1 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
