import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center font-bold text-lg">
              PM
            </div>
            <div>
              <h1 className="text-xl font-bold">Pulkit Modi</h1>
              <p className="text-gray-400 text-sm">Web Developer</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="mailto:Pulkitmodi1998@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Mail size={16} />
              <span>Pulkitmodi1998@gmail.com</span>
            </a>
            <a href="tel:+917062909813" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Phone size={16} />
              <span>+91 7062909813</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={16} />
              <span>Chittorgarh, Rajasthan</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Download size={16} />
              <span className="hidden sm:inline">Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;