// components/Cursor.js
import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseDown = () => {
      setClick(true);
    };

    const onMouseUp = () => {
      setClick(false);
    };

    addEventListeners();

    // Add hover effects for links and buttons
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .hover-effect').forEach(el => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
    };

    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div 
        className={`fixed top-0 left-0 z-50 pointer-events-none transition-all duration-150 ease-out ${
          click ? 'scale-75' : 'scale-100'
        } ${linkHover ? 'scale-150' : ''}`}
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      >
        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
          linkHover 
            ? 'bg-purple-500/20 border-purple-500 scale-150' 
            : click 
              ? 'bg-purple-600 border-purple-600' 
              : 'bg-transparent border-purple-600'
        }`} />
      </div>
      
      {/* Cursor trail */}
      <div className="fixed top-0 left-0 z-40 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
            style={{
              transform: `translate(${position.x - 4 - i * 3}px, ${position.y - 4 - i * 3}px)`,
              transition: `all ${0.1 + i * 0.02}s ease-out`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Cursor;