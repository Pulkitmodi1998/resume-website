import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center font-bold">
                PM
              </div>
              <div>
                <h3 className="font-bold text-lg">Pulkit Modi</h3>
                <p className="text-gray-400 text-sm">Web Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Creating responsive web applications and modern user interfaces. 
              Passionate about web development and continuous learning.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors block">About</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors block">Skills</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors block">Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors block">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:Pulkitmodi1998@gmail.com" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Pulkitmodi1998@gmail.com</span>
              </a>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pulkit Modi. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;