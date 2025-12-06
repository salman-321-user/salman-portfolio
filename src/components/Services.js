// components/Services.js
import React, { useState, useRef, useEffect } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);

  const services = [
    {
      id: 1,
      title: 'Custom Software Development',
      icon: '💻',
      color: 'from-blue-500 to-purple-600',
      gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
      description: 'Tailored desktop and web applications built with cutting-edge technologies like .NET, C#, and modern frameworks.',
      features: [
        'WPF Desktop Applications',
        'Responsive UI',
        'Database Integration',
        'API Development',
        'Performance Optimization'
      ],
      technologies: ['.NET', 'C#', 'WPF', 'SQL', 'REST APIs'],
      price: 'Based on Requirements'
    },
    {
      id: 2,
      title: 'Custom Android App Development',
      icon: '📱',
      color: 'from-green-500 to-teal-600',
      gradient: 'bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
      description: 'Native Android applications using Kotlin and Jetpack Compose with modern Material Design principles.',
      features: [
        'Kotlin/Jetpack Compose',
        'Material Design 3',
        'Google Play Integration',
        'Offline Capabilities',
        'Push Notifications'
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Room DB', 'Firebase'],
      price: 'Based on Requirements'
    },
    {
      id: 3,
      title: 'Front-End Web Development',
      icon: '🌐',
      color: 'from-purple-500 to-pink-600',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      description: 'Responsive, modern web interfaces with React, Tailwind CSS, and engaging user experiences.',
      features: [
        'React.js Applications',
        'Responsive Design',
        'Interactive UI/UX',
        'State Management',
        'API Integration'
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
      price: 'Starting from $100'
    },
    {
      id: 4,
      title: 'Network Labs on Cisco Packet Tracer',
      icon: '🔗',
      color: 'from-orange-500 to-red-600',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      description: 'Professional network simulations, configurations, and troubleshooting using Cisco Packet Tracer.',
      features: [
        'Network Topology Design',
        'Router/Switch Configuration',
        'VLAN Setup',
        'Routing Protocols',
        'Network Security'
      ],
      technologies: ['Cisco IOS', 'Packet Tracer', 'TCP/IP', 'Networking', 'Security'],
      price: 'Starting from $80'
    },
    {
      id: 5,
      title: 'Graphic Designing',
      icon: '🎨',
      color: 'from-pink-500 to-rose-600',
      gradient: 'bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      description: 'Creative visual designs including logos, posters, banners, and digital artwork.',
      features: [
        'Logo & Brand Identity',
        'Poster & Banner Design',
        'Social Media Graphics',
        'UI/UX Mockups',
        'Print & Digital Media'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Canva', 'Illustration', 'Typography'],
      price: 'Starting from $30'
    },
    {
      id: 6,
      title: 'Assignment Tasks & Projects',
      icon: '📚',
      color: 'from-indigo-500 to-blue-600',
      gradient: 'bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20',
      description: 'Academic support for programming assignments, projects, and coding tasks across various domains.',
      features: [
        'Programming Assignments',
        'Project Documentation',
        'Code Implementation',
        'Algorithm Design',
        'Report Writing'
      ],
      technologies: ['Multiple Languages', 'Documentation', 'Research', 'Analysis', 'Presentation'],
      price: 'Based on Complexity'
    },
    {
      id: 7,
      title: 'Editing Projects & Debugging',
      icon: '🔧',
      color: 'from-yellow-500 to-amber-600',
      gradient: 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20',
      description: 'Code review, debugging, optimization, and enhancement of existing projects.',
      features: [
        'Bug Fixing & Debugging',
        'Code Optimization',
        'Performance Tuning',
        'Security Audits',
        'Code Refactoring'
      ],
      technologies: ['Debugging Tools', 'Performance Analysis', 'Security', 'Best Practices', 'Testing'],
      price: 'Starting from $60'
    },
    {
      id: 8,
      title: 'Presentations & Office Tasks',
      icon: '📊',
      color: 'from-cyan-500 to-blue-600',
      gradient: 'bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20',
      description: 'Professional presentations, documents, spreadsheets, and data analysis tasks.',
      features: [
        'PowerPoint Presentations',
        'Word Documentation',
        'Excel Data Analysis',
        'Reports & Proposals',
        'Data Visualization'
      ],
      technologies: ['MS Office', 'Google Workspace', 'Data Analysis', 'Visualization', 'Formatting'],
      price: 'Starting from $30'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Staggered animation for service cards
            serviceRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.classList.add('service-card-visible');
                }, index * 100);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (service) => {
    setActiveService(activeService?.id === service.id ? null : service);
  };

  const handleServiceHover = (service) => {
    setHoveredService(service);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-20 h-20 rounded-full opacity-5 animate-float`}
            style={{
              background: `linear-gradient(45deg, var(--color-${i % 4}), var(--color-${(i + 1) % 4}))`,
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              '--color-0': '#8b5cf6',
              '--color-1': '#ec4899',
              '--color-2': '#3b82f6',
              '--color-3': '#10b981',
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming your ideas into exceptional digital solutions with cutting-edge technology
            and creative expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => serviceRefs.current[index] = el}
              className="service-card group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-700 overflow-hidden"
              onMouseEnter={() => handleServiceHover(service)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Hover border animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/30 transition-all duration-300 pointer-events-none"></div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform group-hover:scale-110`}></div>
                  <div className="absolute inset-2 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  
                  {/* Floating animation */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors relative z-10">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 relative z-10">
                {service.description}
              </p>

              {/* Price Tag */}
              <div className="mb-4 relative z-10">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">
                  <span>{service.price}</span>
                </div>
              </div>

              {/* View Details Button */}
              <div className="relative z-10">
                <button className="w-full py-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-white bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group-hover:shadow-md">
                  View Details
                  <svg className="w-4 h-4 inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Technologies Tags */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center relative z-10">
                {service.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
                    +{service.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {activeService && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative p-8 ${activeService.gradient} border-b border-gray-200 dark:border-gray-700`}>
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  &times;
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeService.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl text-white">{activeService.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {activeService.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">
                        {activeService.price}
                      </span>
                      <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                        ⭐ <b>4+ Rating</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 overflow-y-auto max-h-[60vh]">
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {activeService.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {activeService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Estimated Timeline */}
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        ⏱️ Estimated Timeline
                      </h4>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                          style={{ width: '70%' }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Depend on the Project Requirements
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    onClick={() => setActiveService(null)}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 text-center"
                  >
                    Get Started Now
                  </a>
                  <button
                    onClick={() => setActiveService(null)}
                    className="flex-1 py-3 px-6 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    View Other Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="mr-2">✨</span>
              {services.length}+ Premium Services Available
              <span className="ml-2">🚀</span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Each service comes with dedicated support, regular updates, and a satisfaction guarantee.
            Let's build something amazing together!
          </p>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .service-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }
        
        .service-card-visible {
          animation: serviceSlideIn 0.6s ease-out forwards;
        }
        
        @keyframes serviceSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;