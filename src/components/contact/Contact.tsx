import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "mfonm579@gmail.com",
      link: "mailto:mfonm579@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "08147995494",
      link: "tel:+2348147995494",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Lagos, Nigeria",
      link: "#",
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/mfonmfon",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mfon-mfon-571342263/",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "Discord",
      url: "#",
    }
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden text-white"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let's <span className="text-gray-300">Connect</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Ready to bring your ideas to life? Let's discuss your next project or explore opportunities to work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Get in <span className="text-gray-300">Touch</span>
              </h3>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-neutral-800 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm sm:text-base"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8 sm:mb-10">
                <h4 className="font-bold text-white mb-4 sm:mb-6 flex items-center space-x-2">
                  <span>Follow Me</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <h4 className="font-bold text-white text-sm sm:text-base">Available for:</h4>
                </div>
                <ul className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li>Full-stack web application development</li>
                  <li>Backend development</li>
                  <li>Frontend development</li>
                  <li>Mobile application development</li>
                  <li>Software architecture and design</li>
                  <li>API development and integration</li>
                  <li>Technical support and maintenance</li>
                  <li>Freelance and contract software development opportunities</li>
                </ul>
              </div>
            </div>

            {/* Send Message CTA */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 hover:bg-white/10 transition-all duration-500 text-center">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                      Ready to Start?
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                      Choose your preferred way to reach out:
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {/* Gmail Direct Link */}
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=mfonm579@gmail.com&su=Let's Work Together - Portfolio Contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-black font-bold py-4 px-6 rounded-xl shadow-md hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group text-sm sm:text-base"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Open Gmail</span>
                    </a>

                    {/* Default Email Client */}
                    <a
                      href="mailto:mfonm579@gmail.com?subject=Let's Work Together - Portfolio Contact"
                      className="w-full bg-white/10 border border-white/20 text-white font-bold py-4 px-6 rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group text-sm sm:text-base"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Use Email Client</span>
                    </a>

                    {/* Copy Email */}
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('mfonm579@gmail.com');
                        alert('Email copied to clipboard!');
                      }}
                      className="w-full bg-white/10 border border-white/20 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <span>📋</span>
                      <span>Copy Email Address</span>
                    </button>
                  </div>

                  <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
                    mfonm579@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
