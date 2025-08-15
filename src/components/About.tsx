import React from 'react';
import { User, Award, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg">Get to know the person behind the code</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">Professional Summary</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Passionate Web Developer with experience in frontend and backend development. 
                I specialize in HTML, CSS, JavaScript, React, Python, and modern web technologies. 
                I love creating responsive designs and building efficient web applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                  <h4 className="font-semibold">Experience</h4>
                </div>
                <p className="text-2xl font-bold text-green-400">1+ Year</p>
                <p className="text-gray-400 text-sm">Web Development</p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Coffee className="w-5 h-5 text-yellow-400 mr-2" />
                  <h4 className="font-semibold">Projects</h4>
                </div>
                <p className="text-2xl font-bold text-yellow-400">10+</p>
                <p className="text-gray-400 text-sm">Learning Projects</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-semibold mb-2">Frontend Development</h4>
                <p className="text-gray-400 text-sm">
                  Creating responsive, interactive user interfaces using HTML, CSS, JavaScript, and React.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-semibold mb-2">Backend Architecture</h4>
                <p className="text-gray-400 text-sm">
                  Building server-side applications using Python, Django, and Flask frameworks.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="font-semibold mb-2">Mobile Development</h4>
                <p className="text-gray-400 text-sm">
                  Developing cross-platform mobile applications using Flutter and Dart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;