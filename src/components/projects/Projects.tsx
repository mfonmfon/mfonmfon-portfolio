import { ExternalLink, Github, Star, Eye, ChevronRight } from "lucide-react";
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
import AdvanceImage from '../../assets/projectsimages/advance.png'
import ChekkerImage from '../../assets/projectsimages/chekker.png'
import Alumoni360Image from '../../assets/projectsimages/alumoni360.png'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Advance - Automated Digital Marketing Platform",
      description:
        "Led the full-stack development and technical team for Advance — a 24/7 AI-powered marketing and sales assistant. Businesses connect their website, WhatsApp, Facebook, Instagram, Calendly, Twilio, and Paystack. Advance then automatically finds leads, responds to enquiries, follows up with prospects using AI, and books appointments — all without manual effort from the business owner.",
      image: AdvanceImage,
      technologies: ["React", "Node.js", "WhatsApp API", "Facebook API", "Calendly API", "Twilio", "Paystack", "Machine Learning", "REST API", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 210, views: "4.5k" },
    },
    {
      title: "Alumoni360 - Critical Minerals Digital Infrastructure",
      description:
        "Built the frontend and backend for Alumoni360 — a unified digital infrastructure platform for the global critical minerals economy. The platform brings compliance, provenance tracking, ESG reporting, and workforce intelligence (Staffline) together in one system, enabling governments, mining operators, manufacturers, and investors to verify sourcing, satisfy regulations, and make decisions backed by trusted, audit-ready data.",
      image: Alumoni360Image,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "REST API", "Blockchain", "ESG Reporting", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 187, views: "3.8k" },
    },
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
      title: "Chekker - Digital Health & Home Lab Tests",
      description:
        "Built the frontend for Chekker, a Lagos-based digital health startup connecting patients with medical professionals for at-home sample collection. The platform enables users to book lab tests, request home visits from phlebotomists, and receive digital lab and radiology results within 24–72 hours — all from their mobile or web browser.",
      image: ChekkerImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST API", "Healthcare APIs", "Figma"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 118, views: "2.7k" },
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-neutral-900 border border-neutral-800 text-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

                    {/* Project Stats */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex space-x-1 sm:space-x-2">
                      <div className="bg-black/70 backdrop-blur-md rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 flex items-center space-x-1 text-white text-[10px] sm:text-xs font-medium">
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-amber-400" />
                        <span>{project.stats.stars}</span>
                      </div>
                      {project.stats.views && (
                        <div className="bg-black/70 backdrop-blur-md rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 flex items-center space-x-1 text-white text-[10px] sm:text-xs font-medium hidden sm:flex">
                          <Eye className="w-3 h-3 text-gray-300" />
                          <span>{project.stats.views}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xs sm:text-lg font-bold mb-1 sm:mb-2 text-white line-clamp-2 group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-gray-300 mb-2 sm:mb-4 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-[9px] sm:text-xs text-gray-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-[9px] sm:text-xs text-gray-300 font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-neutral-800/80">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center text-amber-400 hover:text-amber-300 text-xs sm:text-sm font-semibold transition-colors group/more"
                      >
                        <span>More</span>
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 group-hover/more:translate-x-1 transition-transform" />
                      </a>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <a
                          href={project.liveUrl}
                          className="p-1 sm:p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-1 sm:p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors"
                          title="Code"
                        >
                          <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group bg-neutral-900 border border-neutral-800 text-white rounded-xl overflow-hidden shadow hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

                    {/* Mini Stats */}
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md rounded-full px-2 py-0.5 flex items-center space-x-1 text-white text-[10px]">
                      <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xs sm:text-lg font-bold mb-1 sm:mb-2 text-white line-clamp-2">{project.title}</h3>
                      <p className="text-[11px] sm:text-xs text-gray-300 mb-2 sm:mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 text-[9px] sm:text-xs text-gray-300 rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 text-[9px] sm:text-xs text-gray-300 rounded font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center text-amber-400 hover:text-amber-300 text-xs font-semibold"
                      >
                        <span>More</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </a>
                      <div className="flex space-x-1">
                        <a
                          href={project.liveUrl}
                          className="p-1 text-gray-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
                          title="Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-1 text-gray-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
                          title="Code"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      </div>
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
