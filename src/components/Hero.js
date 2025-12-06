// components/Hero.js (Fixed Name Color)
import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    // Mouse move parallax effect - Define this FIRST
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    // Handle scroll to hide indicator
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShowScrollIndicator(true);
        }
      },
      { threshold: 0.7 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Typewriter effect for title
    const title = "M Salman Haider";
    let titleIndex = 0;

    const typeTitle = () => {
      if (titleIndex < title.length && titleRef.current) {
        titleRef.current.innerHTML = title.substring(0, titleIndex + 1) +
          '<span class="typing-cursor">|</span>';
        titleIndex++;
        setTimeout(typeTitle, 100);
      } else if (titleRef.current) {
        // Remove cursor and apply gradient class
        titleRef.current.innerHTML = '<span class="hero-name-gradient">' + title + '</span>';
        startSubtitleAnimation();
      }
    };

    const startSubtitleAnimation = () => {
      if (subtitleRef.current) {
        const words = ["Digital", "Alchemist", "Transforming", "Ideas", "into", "Reality"];
        subtitleRef.current.innerHTML = words
          .map((word, i) =>
            `<span class="hero-word opacity-0 transform translate-y-10 inline-block mx-1" style="animation-delay: ${i * 0.2 + 0.5}s">${word}</span>`
          )
          .join(' ');

        setTimeout(() => {
          const words = subtitleRef.current.querySelectorAll('.hero-word');
          words.forEach(word => {
            word.classList.add('animate-fade-in-up');
          });
        }, 500);
      }
    };

    // Start animations
    setTimeout(typeTitle, 800);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-500 py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full opacity-15 blur-3xl transition-transform duration-200"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500 rounded-full opacity-15 blur-3xl transition-transform duration-200"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl transition-transform duration-300"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        ></div>

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-20 animate-float"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Enhanced Name with Gradient */}
          <div className="mb-4">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 min-h-[1.2em] tracking-tight"
            >
              <span className="hero-name-gradient font-extrabold">
                M Salman Haider
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            ref={subtitleRef}
            className="text-xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-6 font-light tracking-wide leading-tight"
          >
            Digital Alchemist Transforming Ideas into Reality
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-8 space-y-4">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              <span className="opacity-0 animate-fade-in-up block mb-2" style={{ animationDelay: '1.8s' }}>
                Visionary developer crafting digital experiences that transcend the ordinary.
              </span>
              <span className="opacity-0 animate-fade-in-up block" style={{ animationDelay: '2.1s' }}>
                Master of <span className="text-purple-600 dark:text-purple-400 font-semibold">.NET ecosystems</span> and{' '}
                <span className="text-pink-600 dark:text-pink-400 font-semibold">Python-powered AI</span> solutions.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-12">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:animate-shine transition-all duration-1000"></div>
              </div>
              <span className="relative z-10 flex items-center justify-center">
                Get In Touch
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a
              href="#projects"
              className="group relative px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-xl font-semibold text-base bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center justify-center">
                View My Work
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Social Links */}


          <div className="flex justify-center space-x-4">
            {[
              {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/in/muhammad-salman-haider-921645370/',
                icon: '💼',
                color: 'blue',
                animationDelay: '2.4s'
              },
              {
                name: 'GitHub',
                href: 'https://github.com/salman-321-user',
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
                color: 'gray',
                animationDelay: '2.5s'
              },
              {
                name: 'Fiverr',
                href: 'https://www.fiverr.com/s/38j3BQx',
                icon: '🚀',
                color: 'green',
                animationDelay: '2.6s'
              },
              {
                name: 'Email',
                href: 'mailto:mssoftworks2@gmail.com',
                icon: '✉️',
                color: 'red',
                animationDelay: '2.7s'
              },
              {
                name: 'Phone',
                href: 'tel:+923157641129',
                icon: '📱',
                color: 'purple',
                animationDelay: '2.8s'
              }
            ].map((social, index) => (
              <div
                key={social.name}
                className="relative opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: social.animationDelay,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Floating animation background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></div>

                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`
          group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg
          rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 
          transition-all duration-500 hover:scale-110 border border-gray-100 dark:border-gray-700
          animate-float cursor-pointer flex flex-col items-center justify-center
          w-16 h-16
        `}
                  style={{
                    animationDelay: `${2.4 + (index * 0.2)}s`,
                    animationDuration: '3s'
                  }}
                >
                  {/* Pulsing dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>

                  {/* Icon with bounce animation */}
                  <div className="transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {typeof social.icon === 'string' ? (
                      <span className="text-2xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {social.icon}
                      </span>
                    ) : (
                      <div className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {social.icon}
                      </div>
                    )}
                  </div>

                  {/* Label that appears on hover */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
                    <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {social.name}
                    </span>
                  </div>

                  {/* Connecting line animation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-8 transition-all duration-500"></div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Fixed Positioning */}
      <div
        ref={scrollIndicatorRef}
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-50 ${showScrollIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        style={{ animationDelay: '3s' }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-16 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-4 h-4 border-2 border-purple-500 rounded-lg animate-float-slow"></div>
      </div>
      <div className="absolute bottom-16 right-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="w-3 h-3 border-2 border-pink-500 rounded-full animate-float-slow-reverse"></div>
      </div>
    </section>
  );
};

export default Hero;