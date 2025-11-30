// components/Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Smart City Services System",
      description: "A comprehensive WPF-based desktop solution that revolutionizes urban living by integrating essential municipal services into a single intuitive interface.",
      image: "assets/smart.png",
      technologies: [".NET", "C#", "WPF", "MVVM", "SQLite"],
      features: [
        "Real-time bus reservation system with seat mapping",
        "Emergency request prioritization with GPS tracking",
        "Integrated digital wallet for cashless transactions",
        "Automated issue reporting with geotagging",
        "Administrative dashboards with data visualization"
      ],
      details: "The system's bus reservation module optimizes public transport utilization with real-time availability tracking. Emergency request handling prioritizes critical incidents through intelligent routing algorithms. The integrated digital wallet enables cashless transactions for all city services while maintaining robust security protocols."
    },
    {
      id: 2,
      title: "PrimusAI",
      description: "A quantum leap in conversational interfaces, combining cutting-edge natural language processing with generative image capabilities.",
      image: "assets/primus.png",
      technologies: ["Python", "PyQT5", "TensorFlow", "NLP"],
      features: [
        "Transformer-based NLP models for human-like conversations",
        "Stable diffusion image generation with custom models",
        "Document analysis with semantic search and summarization",
        "API endpoints for enterprise integration",
        "Continuous learning from user feedback"
      ],
      details: "The chatbot engine leverages transformer-based models fine-tuned for specific domains, capable of handling complex queries with human-like comprehension. Image generation utilizes stable diffusion techniques with custom-trained models for consistent style output."
    },
    {
      id: 3,
      title: "Online Food Order",
      description: "A comprehensive food ordering platform that redefines culinary e-commerce with its sophisticated yet intuitive interface.",
      image: "assets/onfood.png",
      technologies: [".NET", "C#", "WPF", "MVVM"],
      features: [
        "Dynamic menu management with real-time updates",
        "Intelligent recommendation engine",
        "Kitchen display system integration",
        "Delivery coordination with GPS tracking",
        "Customer loyalty programs"
      ],
      details: "The restaurant management portal enables dynamic menu adjustments with automatic allergen tagging and nutritional information. Order processing includes smart kitchen display system integration and preparation time algorithms."
    },
    {
      id: 4,
      title: "Contact Management System",
      description: "A sophisticated contact management solution with integrated communication capabilities via Twilio API.",
      image: "assets/contact.png",
      technologies: [".NET", "C#", "WPF", "Twilio API", "SQLite"],
      features: [
        "Direct calling and SMS via Twilio API",
        "Advanced contact organization with tags/categories",
        "Relationship mapping between contacts",
        "Powerful search across all contact fields",
        "Data import/export in multiple formats"
      ],
      details: "Built with .NET's WPF framework following strict MVVM patterns. SQLite provides efficient local storage with full CRUD capabilities for thousands of contacts. The Twilio API integration enables direct voice calls and SMS messaging from within the application."
    },
    {
      id: 5,
      title: "Expensio - The Expense Tracker",
      description: "An intelligent expense tracking application with AI insights, visual data charts, budgeting system, and financial tips.",
      image: "assets/expensio.png",
      technologies: ["Android", "Kotlin", "Room DB", "MPAndroidChart", "AI/ML"],
      features: [
        "AI-powered spending insights and predictions",
        "Interactive charts for financial data visualization",
        "Smart budgeting with alerts and recommendations",
        "Income and loan tracking capabilities",
        "Personalized financial tips and instructions"
      ],
      details: "Expensio helps users track daily expenses with an intuitive interface. The app provides AI-driven insights into spending patterns, visual representations of financial data through interactive charts, and a comprehensive budgeting system that handles both income and loans.",
      downloadLink: "https://expensio-the-expense-tracker.en.uptodown.com/android"
    },
    {
      id: 6,
      title: "Echo Wallpapers",
      description: "A voice-activated wallpaper application that allows users to change wallpapers hands-free with voice commands.",
      image: "assets/echowall.png",
      technologies: ["Android", "Kotlin", "Speech Recognition", "Wallpaper API"],
      features: [
        "Voice command wallpaper changing",
        "Automatic and manual wallpaper modes",
        "Extensive wallpaper library with categories",
        "Scheduled wallpaper rotation",
        "Favorites and recent wallpapers"
      ],
      details: "Echo Wallpapers revolutionizes how users interact with their device's appearance. Using advanced speech recognition, users can simply speak commands to change their wallpaper instantly. The app offers both automatic rotation based on time or location and manual selection from an extensive library.",
      downloadLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Code <span className="text-purple-600 dark:text-purple-400">Constellations</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Project Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeProject === index
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}
              >
                {project.title.split(' ')[0]}
              </button>
            ))}
          </div>
          
          {/* Active Project Display */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  className="w-full h-64 md:h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/1A1A2E/F8F9FA?text=${projects[activeProject].title}`;
                  }}
                />
              </div>
              
              <div className="md:w-3/5 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {projects[activeProject].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {projects[activeProject].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {projects[activeProject].details}
                </p>
                
                {projects[activeProject].downloadLink && (
                  <a 
                    href={projects[activeProject].downloadLink}
                    className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Now
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;