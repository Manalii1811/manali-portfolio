import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
              © {currentYear} Manali Bambharolia. Made with
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              and
              <Code className="h-4 w-4 text-blue-400" />
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <button
              onClick={() => {
                const element = document.querySelector('#home');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Designed and developed with modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;