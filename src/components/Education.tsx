import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'MCA (Master of Computer Applications)',
      school: 'JRNRVU University, Udaipur',
      period: '2021',
      gpa: '74%',
      achievements: [
        'Specialized in Computer Applications',
        'Strong foundation in programming',
        'Database management systems'
      ]
    },
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      school: 'U.S.Ostwal College (MLSU)',
      period: '2019',
      gpa: '71%',
      achievements: [
        'Computer Science fundamentals',
        'Programming languages',
        'Software development principles'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Web Development Training',
      issuer: 'Intershala Trainings',
      date: 'Certification No-64ftkvrmfv4',
      badge: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Full Stack Development Intern In Python',
      issuer: 'Cognifyz Technologies',
      date: 'Intern Id: CTI/AI/C63426',
      badge: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const courses = [
    'HTML, CSS, JavaScript',
    'React and Database Management',
    'Python Full Stack Development',
    'Flutter Mobile Development'
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-gray-400 text-lg">Academic background and professional development</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 mb-6">
                  <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                  <div className="text-green-400 font-medium mb-2">{edu.school}</div>
                  <div className="text-gray-400 mb-3">
                    {edu.period} • GPA: {edu.gpa}
                  </div>
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <Award className="w-4 h-4 text-yellow-400 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Courses */}
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold">Recent Courses</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-green-500 transition-colors">
                    <div className="font-medium">{course}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm text-gray-400">{cert.date}</div>
                    </div>
                    <h4 className="font-semibold mb-1 text-sm">{cert.name}</h4>
                    <p className="text-gray-400 text-xs">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;