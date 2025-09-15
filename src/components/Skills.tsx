import React from 'react';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'ReactJS', level: 82 },
        { name: 'Responsive Design', level: 85 },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="h-8 w-8" />,
      color: 'from-emerald-500 to-emerald-600',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 78 },
        { name: 'Database Design', level: 80 },
        { name: 'API Development', level: 75 },
        { name: 'Backend Logic', level: 78 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Server className="h-8 w-8" />,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'GitHub', level: 90 },
        { name: 'GitLab', level: 82 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD Pipelines', level: 70 },
      ]
    },
    {
      title: 'Problem Solving',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Algorithm Design', level: 85 },
        { name: 'Data Structures', level: 88 },
        { name: 'Debugging', level: 85 },
        { name: 'Code Optimization', level: 80 },
        { name: 'System Design', level: 75 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Palette className="h-8 w-8" />,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 88 },
        { name: 'Leadership', level: 85 },
        { name: 'Time Management', level: 90 },
        { name: 'Adaptability', level: 92 },
      ]
    },
  ];

  const softSkills = [
    'Critical Thinking',
    'Creative Problem Solving',
    'Event Management',
    'Public Speaking',
    'Technical Documentation',
    'Hackathon Participation',
    'Sports Leadership',
    'Cultural Activities'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Soft Skills & Professional Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={skill}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg text-center hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;