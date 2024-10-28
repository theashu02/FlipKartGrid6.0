'use client'
import React, { useState } from 'react';
// import Image from 'next/image';
import { X, ChevronRight, Download, Linkedin, Github, Mail } from 'lucide-react';

const AboutUs = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const team = [
    {
      name: "Ashutosh Chauhan",
      role: "Full Stack Developer",
      description: "I’m Ashutosh Chauhan, a final-year B.Tech student. As a full-stack developer, I have worked on several projects, including a Type Racer game, a social media application, a chat application, and gaming portfolios. Currently, I am working as a full-stack developer intern with 1+ years experience at AlgoFlow AI, and I have previously worked as a frontend developer at Pyramid Developers.I secured an All India Rank of 14th in the GFG Job-a-Thon Challenge 2023 and a rank of 105th in the Amazon ML Challenge 2024. I have contributed to open-source projects through Hacktoberfest and GSSOC.",
      skills: ["Next.js", "React.js", "Node.js", "C#/C/C++"],
      resumePath: "/pdfs/ashu.pdf",
      social: {
        linkedin: "https://www.linkedin.com/in/theashuchauhan/",
        github: "https://github.com/theashu02",
        email: "ashutoshchauhan1919@gmail.com"
      }
    },
    {
      name: "Utkarsh Shivhare",
      role: "AI/ML Engineer",
      description: "I’m Utkarsh Shivhare, a final-year B.Tech student with a keen interest in both AI innovation and software development. My projects include AI-driven real-time object detection, plant disease diagnostics, and research on ARM board applications. Ranked nationally in Aerothon and IIT Bombay’s E-Yantra, I’ve honed my skills through internships in AI and IoT, solidifying my foundation in Python, automation, and software development. I’m excited to contribute to roles in AI and software, leveraging my diverse experiences to create effective solutions.",
      resume: "10+ years experience in web development. Expertise in React, Node.js, and Python. Built and scaled applications serving millions of users.",
      skills: ["Python", "AI/ML", "DL", "AWS"],
      resumePath: "/pdfs/utr.pdf",
      social: {
        linkedin: "https://www.linkedin.com/in/utkarsh-shivhare/",
        github: "https://github.com/Utkarsh-Shivhare",
        email: "utkarshshivhare26@gmail.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-28">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl">
              We&apos;re a passionate team dedicated to creating amazing experiences and solving complex problems.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              
              <div className="relative p-6 md:p-8">
                {/* Social Links */}
                <div className="absolute top-4 right-4 flex space-x-3">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
                <p className="text-indigo-600 font-medium mb-4 flex items-center">
                  {member.role}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </p>
                
                <p className="text-gray-600 mb-6">{member.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedResume(member)}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View Resume
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Modal */}
      {selectedResume && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative animate-scale-in">
            <button
              onClick={() => setSelectedResume(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedResume.name}</h3>
                <p className="text-indigo-600 font-medium">{selectedResume.role}</p>
              </div>
            </div>

            {/* Display Resume PDF */}
            <div className="prose max-w-none">
              <iframe 
                src={selectedResume.resumePath} 
                width="100%" 
                height="500px" 
                className="rounded-lg border"
                title="Resume PDF"
              ></iframe>
            </div>

            <div className="mt-8 flex justify-end">
              <a 
                href={selectedResume.resumePath} 
                download 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;