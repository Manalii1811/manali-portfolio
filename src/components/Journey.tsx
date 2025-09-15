import React, { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Award, Code, Users, Star } from 'lucide-react';

const Journey: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const journeyItems = [
    {
      id: 1,
      type: 'education',
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'HSC Science',
      organization: "St. Mary's Junior College",
      date: 'May 2020 - May 2022',
      description: 'Completed Higher Secondary Certificate in Science stream with 73% marks, building a strong foundation in mathematics and science.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      type: 'education',
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'B.Tech Information Technology',
      organization: 'K.J. Somaiya Institute of Technology',
      date: 'May 2022 - Present',
      description: 'Currently pursuing Bachelor of Technology in Information Technology with an outstanding CGPA of 9.2/10. Actively involved in IEEE volunteer activities.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      type: 'work',
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Web Developer Intern',
      organization: 'Prodigy Infotech',
      date: 'Jan 2024 - Feb 2024',
      description: 'Gained hands-on experience in web development, working on real-world projects and enhancing technical skills in modern web technologies.',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      type: 'achievement',
      icon: <Users className="h-6 w-6" />,
      title: 'IEEE Volunteer',
      organization: 'IEEE Student Chapter',
      date: '2022 - Present',
      description: 'Active volunteer in IEEE activities, participating in hackathons and tech events. Contributing to the tech community and gaining leadership experience.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 5,
      type: 'achievement',
      icon: <Award className="h-6 w-6" />,
      title: 'Sports Achievements',
      organization: 'College Sports Events',
      date: '2022 - 2024',
      description: 'Runner-up in Football and Throwball competitions during college sports fest. Also achieved 1st position in Dance competition at College Fest.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 6,
      type: 'achievement',
      icon: <Star className="h-6 w-6" />,
      title: 'Future Aspirations',
      organization: 'Career Development',
      date: '2024 - Beyond',
      description: 'Aspiring to become a skilled full-stack developer, contributing to innovative projects and making a positive impact in the tech industry.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A timeline of my professional growth, key milestones, and continuous learning journey in technology
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div
                key={item.id}
                className={`timeline-item relative flex items-center opacity-0 transition-all duration-700 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-current shadow-lg z-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${item.color} text-white`}>
                        {item.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready for the Next Chapter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;