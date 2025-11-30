// components/Skills.js (Fully Upgraded)
import React, { useState, useRef, useEffect } from 'react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  const skills = [
    {
      name: 'React',
      icon: process.env.PUBLIC_URL + '/assets/react.png',
      level: 90,
      color: 'from-cyan-500 to-blue-600',
      description: 'Building dynamic, responsive user interfaces with modern React patterns and hooks.'
    },
    {
      name: 'C#',
      icon: process.env.PUBLIC_URL + '/assets/csharp.png',
      level: 95,
      color: 'from-purple-600 to-purple-800',
      description: 'Enterprise-level application development with .NET framework and C# best practices.'
    },
    {
      name: 'HTML',
      icon: process.env.PUBLIC_URL + '/assets/html.png',
      level: 95,
      color: 'from-orange-500 to-red-600',
      description: 'Semantic, accessible markup with modern HTML5 features and web standards.'
    },
    {
      name: 'CSS',
      icon: process.env.PUBLIC_URL + '/assets/css.png',
      level: 90,
      color: 'from-blue-500 to-indigo-600',
      description: 'Advanced styling with CSS3, animations, and responsive design principles.'
    },
    {
      name: 'JavaScript',
      icon: process.env.PUBLIC_URL + '/assets/js.png',
      level: 85,
      color: 'from-yellow-400 to-yellow-600',
      description: 'ES6+ features, async programming, and modern JavaScript development patterns.'
    },
    {
      name: 'Graphic Design',
      icon: process.env.PUBLIC_URL + '/assets/graphic_designing.png',
      level: 80,
      color: 'from-pink-500 to-rose-600',
      description: 'Creating visually appealing designs with attention to typography and user experience.'
    },
    {
      name: 'Kotlin',
      icon: process.env.PUBLIC_URL + '/assets/kotlin.png',
      level: 75,
      color: 'from-purple-500 to-pink-600',
      description: 'Android app development with modern Kotlin features and Jetpack libraries.'
    },
    {
      name: 'Jetpack Compose',
      icon: process.env.PUBLIC_URL + '/assets/jetpack_compose.png',
      level: 70,
      color: 'from-blue-600 to-cyan-500',
      description: 'Declarative UI development for Android with modern Compose architecture.'
    },
    {
      name: 'Vite',
      icon: process.env.PUBLIC_URL + '/assets/vite.png',
      level: 80,
      color: 'from-yellow-500 to-purple-600',
      description: 'Fast build tools and development environment for modern web projects.'
    },
    {
      name: 'SQL',
      icon: process.env.PUBLIC_URL + '/assets/sql.png',
      level: 85,
      color: 'from-blue-600 to-blue-800',
      description: 'Database design, optimization, and complex query writing for various SQL databases.'
    },
    {
      name: '.NET',
      icon: process.env.PUBLIC_URL + '/assets/dotnet.png',
      level: 90,
      color: 'from-purple-700 to-pink-700',
      description: 'Full-stack development with .NET ecosystem including ASP.NET Core and Entity Framework.'
    },
    {
      name: 'Python',
      icon: process.env.PUBLIC_URL + '/assets/python.png',
      level: 85,
      color: 'from-yellow-500 to-blue-600',
      description: 'Versatile programming for web development, data analysis, and automation scripts.'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Add staggered animation for each skill card
            skillRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.classList.add('skill-card-visible');
                }, index * 100);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSkillHover = (skill, index) => {
    setActiveSkill(skill);

    // Add pulse animation to the hovered skill
    if (skillRefs.current[index]) {
      skillRefs.current[index].classList.add('skill-pulse');
      setTimeout(() => {
        if (skillRefs.current[index]) {
          skillRefs.current[index].classList.remove('skill-pulse');
        }
      }, 600);
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          My <span className="text-purple-600 dark:text-purple-400">Skillset</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          Technologies I've mastered to create exceptional digital experiences
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => skillRefs.current[index] = el}
              className="skill-card group relative bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-600"
              onMouseEnter={() => handleSkillHover(skill, index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5">
                <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-700 m-0.5"></div>
              </div>

              {/* Skill Icon with enhanced animation */}
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto mb-2 relative">
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform group-hover:scale-110`}></div>

                  {/* Icon container */}
                  <div className="absolute inset-2 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    {/* Fallback text */}
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300 hidden">
                      {skill.name}
                    </span>
                  </div>

                  {/* Floating dots animation */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors relative z-10">
                {skill.name}
              </h3>

              {/* Animated Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out skill-progress`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                    }}
                  ></div>
                </div>

                {/* Animated percentage indicator */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-bold transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 shadow-lg">
                  {skill.level}%
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-800 dark:bg-gray-900 rotate-45"></div>
                </div>

                {/* Progress dots */}
                <div className="flex justify-between mt-2">
                  {[0, 25, 50, 75, 100].map((point) => (
                    <div
                      key={point}
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${skill.level >= point ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-500'
                        } ${skill.level === point ? 'animate-pulse' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Level indicator text */}
              <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
                {skill.level >= 90 ? 'Expert' :
                  skill.level >= 75 ? 'Advanced' :
                    skill.level >= 60 ? 'Intermediate' : 'Learning'}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Skill Description Panel */}
        <div className={`mt-12 max-w-4xl mx-auto transition-all duration-500 transform ${activeSkill ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}>
          {activeSkill && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-purple-100 dark:border-purple-900">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <img
                    src={activeSkill.icon}
                    alt={activeSkill.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {activeSkill.name}
                  </h4>
                  <div className="flex items-center mt-1">
                    <div className="w-24 bg-gray-300 dark:bg-gray-600 rounded-full h-2 mr-3">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${activeSkill.color} transition-all duration-1000`}
                        style={{ width: `${activeSkill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      {activeSkill.level}% Mastery
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {activeSkill.description}
              </p>

              {/* Skill usage examples */}
              <div className="mt-4 flex flex-wrap gap-2">
                {activeSkill.name === 'React' && (
                  <>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Components</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Hooks</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">State Management</span>
                  </>
                )}
                {activeSkill.name === 'C#' && (
                  <>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">.NET Core</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">ASP.NET</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Entity Framework</span>
                  </>
                )}
                {/* Add more skill-specific tags as needed */}
              </div>
            </div>
          )}
        </div>

        {/* Overall Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
            <span className="mr-2">🚀</span>
            {skills.length}+ Technologies Mastered
            <span className="ml-2">💫</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;