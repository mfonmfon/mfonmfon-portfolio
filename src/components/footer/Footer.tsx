import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-500" />
                <span>using</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">React</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-300">TypeScript</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-300">Tailwind CSS</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1">
                &copy; 2025 <span className="text-white font-semibold">Mfon Mfon</span>
              </p>
              <p className="text-sm text-gray-500">
                All rights reserved. Made with passion and dedication.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
              "Code is poetry written in logic" - Building the future, one line at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;