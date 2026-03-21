import React from "react";
import { ExternalLink, Github, Star, Eye } from "lucide-react";
import  QuilifyProjectImages from  '../../assets/projectsimages/Screenshot (703).png'
import TheCareerCoreImage from '../../assets/projectsimages/thecareercore.png'
import HomeBookImage from '../../assets/projectsimages/HomeBook.png'
import WalletImage from '../../assets/projectsimages/walletdashboard.jpg'
import TherapyAppImage from '../../assets/projectsimages/Therapy.png'
import MfonImage from '../../assets/projectsimages/MfonImage.jpg'
import FastpingerImage from '../../assets/projectsimages/fastpingerlogo.jpg'
import AkipathImage from '../../assets/projectsimages/akipath.png'
import HealthAIImage from '../../assets/projectsimages/health.jpg'
import WeManageImage from '../../assets/projectsimages/Wemanage logo.png'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Fastpinger - AI-Driven Lead Generation Platform",
      description:
        "Built and maintained responsive, high-quality user interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Translated Figma designs into pixel-perfect components with clear architecture. Developed and consumed RESTful APIs with async data fetching. Integrated WhatsApp Cloud API (Meta) for automated messaging workflows.",
      image: FastpingerImage,
      technologies: ["React", "JavaScript", "Tailwind CSS", "REST API", "WhatsApp API", "Figma"],
      liveUrl: "https://fastpinger.com",
      githubUrl: "#",
      featured: true,
      stats: { stars: 156, views: "3.2k" },
    },
    {
      title: "Identity Verification Platform - Akipath",
      description:
        "Collaborated with frontend engineers to design clean REST API contracts for rapid UI integration in a rental identity-verification platform. Integrated third-party APIs including Cloudinary, Google Maps, and payment gateway for frontend-facing data flows.",
      image: AkipathImage,
      technologies: ["REST API", "Cloudinary", "Google Maps", "Payment Gateway", "React"],
      liveUrl: "https://akipath.ca",
      githubUrl: "#",
      featured: true,
      stats: { stars: 142, views: "2.8k" },
    },
    {
      title: "WeManage - Open Banking App",
      description:
        "Developed the frontend of an app consolidating multiple bank accounts with seamless transactions and smart financial insights. Integrated Mono API for account linking and BVN verification, implemented blockchain-based DID for user privacy. Delivered a functional MVP in four days as part of a cross-functional team.",
      image: WeManageImage,
      technologies: ["React", "Mono API", "Blockchain", "DID", "Financial APIs"],
      liveUrl: "https://wemange-frontend.vercel.app/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 98, views: "2.3k" },
    },
    {
      title: "AI Health Prediction System",
      description:
        "Designed and built a responsive React.js frontend for an AI-powered health prediction system storing large medical datasets. Integrated the Gemini API to enable an AI Doctor feature allowing patients to interact with an AI assistant. Applied design thinking to create practical, intuitive healthcare interfaces within a two-day sprint.",
      image: HealthAIImage,
      technologies: ["React", "Gemini API", "AI/ML", "Healthcare", "Design Thinking"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 134, views: "2.6k" },
    },
    {
      title: "Blog Platform",
      description:
        "Designed and developed a full-stack blog application with a React frontend, Java Spring Boot backend, and MySQL database. Key features include secure user authentication, blog creation, editing, and management, providing a seamless end-to-end blogging experience.",
      image: QuilifyProjectImages,
      technologies: ["React", "Java", "MySQL", "SpringBoot"],
      liveUrl: "https://quillify-nine.vercel.app/",
      githubUrl: "https://github.com/mfonmfon/quillify.git",
      featured: false,
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
      featured: false,
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
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured <span className="text-white">Projects</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A showcase of my recent work demonstrating full-stack development expertise
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Project Stats */}
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <div className="bg-white/95 rounded-full px-2.5 py-1 flex items-center space-x-1 text-black text-xs font-medium">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                      {project.stats.views && (
                        <div className="bg-white/95 rounded-full px-2.5 py-1 flex items-center space-x-1 text-black text-xs font-medium">
                          <Eye className="w-3 h-3" />
                          <span>{project.stats.views}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 border border-gray-300 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 border border-gray-300 rounded-lg text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center justify-center space-x-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm font-medium flex-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center justify-center space-x-2 px-5 py-2.5 border border-gray-300 rounded-lg text-black hover:bg-gray-100 transition-all duration-300 text-sm font-medium flex-1"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group bg-white text-black rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Mini Stats */}
                    <div className="absolute top-2 right-2 bg-white/95 rounded-full px-2 py-1 flex items-center space-x-1 text-black text-xs">
                      <Star className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-xs text-gray-700 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 border border-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 border border-gray-300 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="flex items-center justify-center flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-xs font-medium"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center justify-center flex-1 py-2 border border-gray-300 rounded-lg text-black hover:bg-gray-100 transition-all duration-300 text-xs font-medium"
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
