import React from 'react';
import { Code2 } from 'lucide-react';
import MfonAboutImage from '../../assets/projectsimages/MfonImage.jpg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Grid (light subtle grid for aesthetics) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
                About <span className="text-black">Me</span>
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
                <p>
                  I'm a <span className="font-semibold">full-stack software engineer</span> with experience 
                  developing, designing and maintaining applications. My work bridges both backend and frontend, creating 
                  seamless and impactful user experiences.
                </p>
                <p>
                  I develop <span className="font-semibold">scalable backend services</span> in 
                  Java, Python, and Node.js, while crafting intuitive frontends with React and Next.js. I focus on 
                  <span className="font-semibold"> clean, efficient code</span> that grows with your needs.
                </p>
                <p>
                  I dont just write code, but I solve problems. I thrive on turning complex challenges into elegant solutions
                  that drive real results. Whether building new features or optimizing existing systems, I bring a 
                  <span className="font-semibold"> user-centric mindset</span> to every project.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={MfonAboutImage}
                  alt="Workspace setup"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
              </div>
              
              {/* Floating Icon */}
              <div className="absolute -top-6 -right-6 bg-black p-4 rounded-2xl shadow-lg animate-float">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              
              {/* Availability Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-6 rounded-2xl shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-black">Available for Projects</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">Ready to bring your ideas to life</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
