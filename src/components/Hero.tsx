import React from 'react';
import { Code, Palette, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Creating responsive designs and modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-400">HTML, CSS, JavaScript, React, Bootstrap</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <Server className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-400">Python, Django, Flask, Database Management</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
              <Palette className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-400">Flutter App using Dart, Cross-platform</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-600 hover:border-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;