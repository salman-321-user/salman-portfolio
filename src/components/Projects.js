// components/Projects.js (Separate Image & Details with Fullscreen Modal)
// Uses process.env.PUBLIC_URL for image paths (public/assets/...)
import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [isApp, setIsApp] = useState(false);

  // base public url (will be '' in dev or the homepage path in prod)
  const PUBLIC_URL = process.env.PUBLIC_URL || '';

  const projects = [
    {
      id: 1,
      title: "Car Avoidance Game",
      description: "An addictive real-time car avoidance game with global leaderboards, profile customization, and responsive controls for both desktop and mobile devices.",
      images: ["car.png", "car2.png", "car3.png", "car4.png", "car5.png"],
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "React Router", "Canvas API", "Google Auth"],
      features: [
        "Real-time game engine with collision detection",
        "Global leaderboard with ranking system",
        "User authentication with Google Sign-In",
        "Profile customization with emojis and images",
        "Responsive design for desktop and mobile",
        "Progressive difficulty system"
      ],
      details: "A high-performance car avoidance game built with React and Canvas API. Features include real-time collision detection, global leaderboards powered by Firebase, user authentication with Google Sign-In, and comprehensive profile customization. The game includes responsive controls that work seamlessly on both desktop (arrow keys) and mobile (touch buttons). The difficulty increases progressively with level progression, and scores are saved in real-time to Firebase Firestore.",
      liveLink: "https://salman-321-user.github.io/car-avoidance-game/",
      githubLink: "https://github.com/salman-321-user/car-avoidance-game",
      type: "web"
    },
    {
      id: 2,
      title: "Smart City Services System",
      description: "A comprehensive WPF-based desktop solution that revolutionizes urban living by integrating essential municipal services into a single intuitive interface.",
      images: ["smart.PNG", "smart2.png", "smart3.png", "smart4.png", "smart5.png"],
      technologies: [".NET", "C#", "WPF", "MVVM", "SQLite", "Map API", "HTML"],
      features: [
        "Real-time bus reservation system with seat mapping",
        "Emergency request prioritization with GPS tracking",
        "Integrated digital wallet for cashless transactions",
        "Automated issue reporting with geotagging",
        "Administrative dashboards with data visualization"
      ],
      details: "The system's bus reservation module optimizes public transport utilization with real-time availability tracking. Emergency request handling prioritizes critical incidents through intelligent routing algorithms. The integrated digital wallet enables cashless transactions for all city services while maintaining robust security protocols.",
      type: "software"
    },
    {
      id: 3,
      title: "PrimusAI",
      description: "A quantum leap in conversational interfaces, combining cutting-edge natural language processing with generative image capabilities.",
      images: ["primus.png", "primus2.png", "primus3.png", "primus4.png", "primus5.png"],
      technologies: [
        "Python",
        "PyQT5",
        "TensorFlow",
        "NLP",
        "NumPy",
        "scikit-learn",
        "OCR",
        "Google GenerativeAI",
        "APIs",
        "NLTK",
        "Torch",
        "TorchVision"
      ],
      features: [
        "Transformer-based NLP models for human-like conversations",
        "Stable diffusion image generation with custom models",
        "Document analysis with semantic search and summarization",
        "API endpoints for enterprise integration",
        "Continuous learning from user feedback"
      ],
      details: "The chatbot engine leverages transformer-based models fine-tuned for specific domains, capable of handling complex queries with human-like comprehension. Image generation utilizes stable diffusion techniques with custom-trained models for consistent style output.",
      type: "software"
    },
    {
      id: 4,
      title: "Online Food Order",
      description: "A comprehensive food ordering platform that redefines culinary e-commerce with its sophisticated yet intuitive interface.",
      images: ["onfood.png", "onfood2.png", "onfood3.png", "onfood4.png", "onfood5.png"],
      technologies: [".NET", "C#", "WPF", "MVVM"],
      features: [
        "Dynamic menu management with real-time updates",
        "Intelligent recommendation engine",
        "Kitchen display system integration",
        "Delivery coordination with GPS tracking",
        "Customer loyalty programs"
      ],
      details: "The restaurant management portal enables dynamic menu adjustments with automatic allergen tagging and nutritional information. Order processing includes smart kitchen display system integration and preparation time algorithms.",
      type: "software"
    },
    {
      id: 5,
      title: "Contact Management System",
      description: "A sophisticated contact management solution with integrated communication capabilities via Twilio API.",
      images: ["contact.png", "contact2.png", "contact3.png", "contact4.png", "contact5.png"],
      technologies: [".NET", "C#", "WPF", "Twilio API", "SQLite"],
      features: [
        "Direct calling and SMS via Twilio API",
        "Advanced contact organization with tags/categories",
        "Relationship mapping between contacts",
        "Powerful search across all contact fields",
        "Data import/export in multiple formats"
      ],
      details: "Built with .NET's WPF framework following strict MVVM patterns. SQLite provides efficient local storage with full CRUD capabilities for thousands of contacts. The Twilio API integration enables direct voice calls and SMS messaging from within the application.",
      type: "software"
    },
    {
      id: 6,
      title: "Expensio - The Expense Tracker",
      description: "An intelligent expense tracking application with AI insights, visual data charts, budgeting system, and financial tips.",
      images: ["expensio.png", "expensio2.png", "expensio3.png", "expensio4.png", "expensio5.png"],
      technologies: ["Android Studio", "Kotlin", "Jetpack Compose", "Room DB", "MPAndroidChart", "AI"],
      features: [
        "AI-powered spending insights and predictions",
        "Interactive charts for financial data visualization",
        "Smart budgeting with alerts and recommendations",
        "Income and loan tracking capabilities",
        "Personalized financial tips and instructions"
      ],
      details: "Expensio helps users track daily expenses with an intuitive interface. The app provides AI-driven insights into spending patterns, visual representations of financial data through interactive charts, and a comprehensive budgeting system that handles both income and loans.",
      downloadLink: "https://expensio-the-expense-tracker.en.uptodown.com/android",
      type: "app"
    },
    {
      id: 7,
      title: "Echo Wallpapers",
      description: "A voice-activated wallpaper application that allows users to change wallpapers hands-free with voice commands.",
      images: ["echowall.jpg", "echowall2.jpg", "echowall3.jpg", "echowall4.jpg", "echowall5.jpg"],
      technologies: ["Android Studio", "Kotlin", "Jetpack Compose", "Speech Recognition", "Room DB"],
      features: [
        "Voice command wallpaper changing",
        "Automatic and manual wallpaper modes",
        "Extensive wallpaper library with categories",
        "Scheduled wallpaper rotation",
        "Favorites and recent wallpapers"
      ],
      details: "Echo Wallpapers revolutionizes how users interact with their device's appearance. Using advanced speech recognition, users can simply speak commands to change their wallpaper instantly. The app offers both automatic rotation based on time or location and manual selection from an extensive library.",
      downloadLink: "#",
      type: "app"
    }
  ];

  // Handle image errors
  const handleImageError = (e, imageName) => {
    console.log(`Image failed to load: ${imageName}`);
    // fallback to a hosted placeholder that still shows the project title
    const projectTitle = projects[activeProject]?.title || 'Image';
    e.target.src = `${PUBLIC_URL}/assets/placeholder.png`;
    e.target.alt = `Placeholder for ${projectTitle}`;
  };

  // Reset active image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
    setIsApp(projects[activeProject].type === "app");
  }, [activeProject]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showFullscreen) {
        if (e.key === 'Escape') {
          setShowFullscreen(false);
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showFullscreen, activeProject, activeImageIndex]);

  // Navigation functions
  const nextImage = () => {
    if (projects[activeProject]?.images) {
      setActiveImageIndex(prev => (prev + 1) % projects[activeProject].images.length);
    }
  };

  const prevImage = () => {
    if (projects[activeProject]?.images) {
      setActiveImageIndex(prev => (prev - 1 + projects[activeProject].images.length) % projects[activeProject].images.length);
    }
  };

  // Open fullscreen modal
  const openFullscreen = (index) => {
    setActiveImageIndex(index);
    setShowFullscreen(true);
  };

  // helper to build asset path from public url
  const assetPath = (filename) => `${PUBLIC_URL}/assets/${filename}`;

  return (
    <>
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
                  className={`px-4 py-2 rounded-full font-medium transition-all ${activeProject === index
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                    }`}
                >
                  {project.title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Main Content - Separate Image and Details Sections */}
            <div className="space-y-12">
              {/* Image Gallery Section - Full Width */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                  Project Screenshots
                </h3>

                {/* Main Image Display */}
                <div className={`relative rounded-xl overflow-hidden mb-6 ${projects[activeProject].type === "app" ? 'max-w-md mx-auto' : 'max-w-4xl mx-auto'}`}>
                  <div
                    className={`cursor-zoom-in transition-transform duration-300 hover:scale-105 ${projects[activeProject].type === "app" ? 'aspect-[9/16]' : 'aspect-[16/9]'}`}
                    onClick={() => openFullscreen(activeImageIndex)}
                  >
                    <img
                      src={assetPath(projects[activeProject].images[activeImageIndex])}
                      alt={`${projects[activeProject].title} - Image ${activeImageIndex + 1}`}
                      className={`w-full h-full object-contain bg-gray-100 dark:bg-gray-700 ${projects[activeProject].type === "app" ? 'object-contain' : 'object-cover'}`}
                      onError={(e) => handleImageError(e, projects[activeProject].images[activeImageIndex])}
                      loading="lazy"
                    />
                  </div>

                  {/* Image Navigation */}
                  {projects[activeProject].images.length > 1 && (
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activeImageIndex + 1} / {projects[activeProject].images.length}
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={() => openFullscreen(activeImageIndex)}
                    className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all"
                    aria-label="View fullscreen"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex justify-center space-x-3 overflow-x-auto py-4">
                  {projects[activeProject].images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === index
                        ? 'border-purple-500 scale-105 ring-2 ring-purple-500/30'
                        : 'border-transparent hover:border-gray-300'
                        }`}
                    >
                      <div className={`${projects[activeProject].type === "app" ? 'w-20 h-32' : 'w-32 h-20'}`}>
                        <img
                          src={assetPath(image)}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = `${PUBLIC_URL}/assets/thumb-placeholder.png`;
                          }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details Section - Full Width */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Basic Info */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      {projects[activeProject].title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {projects[activeProject].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons - Updated for Car Avoidance Game */}
                    <div className="space-y-3">
                      {projects[activeProject].liveLink && (
                        <a
                          href={projects[activeProject].liveLink}
                          className="inline-flex items-center justify-center w-full px-5 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          Play Now
                        </a>
                      )}
                      
                      {projects[activeProject].githubLink && (
                        <a
                          href={projects[activeProject].githubLink}
                          className="inline-flex items-center justify-center w-full px-5 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                          View on GitHub
                        </a>
                      )}
                      
                      {projects[activeProject].downloadLink && !projects[activeProject].liveLink && (
                        <a
                          href={projects[activeProject].downloadLink}
                          className="inline-flex items-center justify-center w-full px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
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

                  {/* Middle Column - Features */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {projects[activeProject].features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Details & Stats */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Project Details</h4>
                    <p
                      className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-justify"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      {projects[activeProject].details}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                          {projects[activeProject].images.length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Screenshots</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                          {projects[activeProject].features.length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Features</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 text-center col-span-2">
                        <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                          {projects[activeProject].type === "app" 
                            ? "📱 Android Application" 
                            : projects[activeProject].type === "web"
                            ? "🌐 Web Application"
                            : "💻 Desktop Software"}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
              <p>💡 Click on any screenshot to view it fullscreen • Use arrow keys in fullscreen mode for navigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {showFullscreen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowFullscreen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-purple-400 transition-colors z-10"
            onClick={() => setShowFullscreen(false)}
            aria-label="Close fullscreen"
          >
            &times;
          </button>

          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Navigation Arrows */}
            {projects[activeProject].images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all z-10"
                  aria-label="Next image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image */}
            <div className={`${projects[activeProject].type === "app" ? 'max-h-[90vh] max-w-[90vw]' : 'max-h-[90vh] max-w-[90vw]'}`}>
              <img
                src={assetPath(projects[activeProject].images[activeImageIndex])}
                alt={`${projects[activeProject].title} - Fullscreen View`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = `${PUBLIC_URL}/assets/placeholder.png`;
                }}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-lg font-medium">
              {activeImageIndex + 1} / {projects[activeProject].images.length}
            </div>

            {/* Thumbnails in Fullscreen */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-12">
              <div className="flex space-x-2">
                {projects[activeProject].images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(index);
                    }}
                    className={`flex-shrink-0 rounded overflow-hidden border-2 transition-all ${activeImageIndex === index
                      ? 'border-purple-500 scale-110'
                      : 'border-transparent hover:border-gray-300'
                      }`}
                  >
                    <div className={`${projects[activeProject].type === "app" ? 'w-12 h-16' : 'w-16 h-12'}`}>
                      <img
                        src={assetPath(image)}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Keyboard Instructions */}
            <div className="absolute top-6 left-6 text-white/70 text-sm">
              <p>Press ← → to navigate • ESC to exit</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;