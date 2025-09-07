import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
      url: "#",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "#",
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
      className="py-24 bg-black relative overflow-hidden text-white"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's <span className="text-gray-300">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project or explore opportunities to work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Get in <span className="text-gray-300">Touch</span>
              </h3>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-neutral-800 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h4 className="font-bold text-white mb-6 flex items-center space-x-2">
                  <span>Follow Me</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="group p-4 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-white" />
                  <h4 className="font-bold text-white">Available for:</h4>
                </div>
                <ul className="text-gray-300 space-y-3">
                <li>Full-stack web application development</li>
                <li>Backend development </li>
                <li>Frontend development</li>
                <li>Mobile application development</li>
                <li>Software architecture and design</li>
                <li>API development and integration</li>
                <li>Technical support and maintenance</li>
                <li>Freelance and contract software development opportunities</li>
              </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                        placeholder="your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                        placeholder="mfon@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-bold py-4 px-8 rounded-xl shadow-md hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
