import React from 'react';
import { Download, Heart, Code, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const handleDownloadResume = () => {
    // In a real application, you would link to an actual PDF file
    const link = document.createElement('a');
    link.href = '/Manali_Bambharolia_Resume.pdf';
    link.download = 'Manali_Bambharolia_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Passionate Student & Aspiring Developer
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a B.Tech IT student at K.J. Somaiya Institute of Technology with a strong foundation 
              in programming and web development. Passionate about problem-solving, I enjoy working with 
              modern frameworks and backend systems to deliver impactful solutions.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently maintaining a CGPA of 9.2/10, I've gained hands-on experience through internships 
              and personal projects. I'm actively involved in IEEE volunteer activities and enjoy 
              participating in hackathons and tech events. When not coding, I love playing football, 
              dancing, and participating in sports competitions.
            </p>

            {/* Interests */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Code className="h-5 w-5" />
                <span className="text-gray-700 dark:text-gray-300">Web Development</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Heart className="h-5 w-5" />
                <span className="text-gray-700 dark:text-gray-300">Problem Solving</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Coffee className="h-5 w-5" />
                <span className="text-gray-700 dark:text-gray-300">Sports & Dance</span>
              </div>
            </div>

            {/* Download Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mt-8"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </button>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/in/manali-bambharolia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/manalib1811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column - Image/Stats */}
          <div className="lg:text-center">
            {/* Professional Image Placeholder */}
            <div className="w-80 h-80 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold mb-4">
                  MB
                </div>
                <p className="text-gray-600 dark:text-gray-400">Professional Photo</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">9.2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">IEEE</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Volunteer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;