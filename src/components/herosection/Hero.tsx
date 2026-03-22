import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-white/5 to-white/0 rounded-full filter blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium">Available for new opportunities</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Hero Text Section */}
          <div className="mt-8 sm:mt-16">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-white mb-4 sm:mb-6">
              <span className="block sm:inline mr-0 sm:mr-4">Full-Stack</span>
              <span className="block sm:inline text-gray-300">Developer</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Crafting scalable backend architectures and stunning frontend experiences 
              with <span className="font-semibold text-white">modern technologies</span> and 
              <span className="font-semibold text-white"> clean code</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-14 px-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full shadow-2xl hover:shadow-white/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">View My Work</span>
                </span>
                <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Let's Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
              {[
                { icon: Github, href: 'https://github.com/mfonmfon', color: 'hover:text-white' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mfon-mfon-571342263/', color: 'hover:text-white' },
                { icon: Mail, href: 'mfonm579@gmail.com', color: 'hover:text-white' }
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 ${color} transform hover:scale-110 transition-all duration-300 hover:bg-white/10`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300 mt-4"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
          </button>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="hidden lg:block absolute top-20 left-10 text-white/10 text-6xl font-mono animate-float">{'<>'}</div>
      <div className="hidden lg:block absolute bottom-20 right-10 text-white/10 text-6xl font-mono animate-float animation-delay-2000">{'</>'}</div>
      <div className="hidden lg:block absolute top-1/2 right-20 text-white/10 text-4xl font-mono animate-float animation-delay-4000">{'{ }'}</div>
    </section>
  );
};

export default Hero;
