import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'Warrgyzmorsch Pvt.Ltd',
      location: 'Remote',
      period: 'March 2024 - Present',
      description: 'As a web Developer at warrgyzmorsch, I designed, developed, and SQLite. I build responsive user interfaces, optimized website performance, and integrated databases for seamless functionality. I collaborated with teams to deliver efficient solutions.',
      achievements: [
        'Built responsive user interfaces with modern web technologies',
        'Optimized website performance and database integration',
        'Collaborated with cross-functional teams for seamless functionality'
      ]
    },
    {
      title: 'Front-End Developer',
      company: 'SOHA TECHNOLOGIES PVT.LTD',
      location: 'Remote',
      period: 'Sept.2023 - Feb.2024',
      description: 'I had worked as a front-end developer, making a responsive design some backend work and handling database operations.',
      achievements: [
        'Created responsive designs for multiple client projects',
        'Handled backend integration and database operations',
        'Delivered high-quality frontend solutions on time'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey and achievements</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-green-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-medium">{exp.period}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-green-400 font-medium">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-400 text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-yellow-400">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;