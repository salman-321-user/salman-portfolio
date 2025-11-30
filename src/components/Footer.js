// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="text-xl font-bold">M Salman Haider</span>
            </div>
            <p className="text-gray-400">Digital Alchemist Transforming Ideas into Reality</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/muhammad-salman-haider-921645370/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
              </svg>
            </a>
            <a 
              href="https://www.fiverr.com/s/38j3BQx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.2819 9.8211C22.2819 9.8211 21.9081 7.1896 20.9806 6.2621C19.7656 5.0461 17.8719 5.7346 16.5656 5.34335C15.2531 4.9511 12.1594 4.0236 10.4531 4.7736C8.74687 5.5236 8.46562 6.7961 8.37187 7.5261C8.27812 8.2561 7.13437 12.9111 6.41562 14.7736C5.69687 16.6361 4.99687 17.0911 4.66875 17.0911C4.34062 17.0911 3.84375 16.8461 4.03125 16.0911C4.21875 15.3361 5.46562 11.7611 5.84062 10.3111C6.21562 8.8611 6.38719 8.4661 5.97187 7.8336C5.55656 7.2011 3.84062 7.5161 3.84062 7.5161C3.84062 7.5161 2.5125 7.7111 2.26875 8.8336C2.025 9.9561 2.4 10.8236 2.4 10.8236C2.4 10.8236 1.125 12.5736 2.45625 15.3361C3.7875 18.0986 5.71875 18.2736 7.3875 17.8986C9.05625 17.5236 9.84375 16.8236 10.5 16.2736C11.1562 15.7236 12.1406 14.8236 12.6562 14.4611C13.1719 14.0986 13.9219 14.2736 13.9219 14.8986C13.9219 15.5236 13.9219 16.7111 14.0625 17.2736C14.2031 17.8361 14.7188 20.7611 16.6406 20.7611C18.5625 20.7611 21.8438 17.0236 22.2812 9.8211H22.2819Z" />
              </svg>
            </a>
            <a 
              href="mailto:mssoftworks2@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 M Salman Haider. All rights reserved.</p>
          <p className="mt-2 text-sm">The code and content presented on this portfolio are proprietary. Unauthorized reproduction or distribution is strictly prohibited.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;