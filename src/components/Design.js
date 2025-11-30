// components/Design.js
import React, { useState } from 'react';

const Design = () => {
  const [activeImage, setActiveImage] = useState(null);

  const designs = [
    { id: 1, src: process.env.PUBLIC_URL + "/assets/1.png", title: "Gaming Poster", category: "gaming" },
    { id: 2, src: process.env.PUBLIC_URL + "/assets/2.png", title: "Esports Gaming", category: "gaming" },
    { id: 3, src: process.env.PUBLIC_URL + "/assets/3.png", title: "PC Games", category: "gaming" },
    { id: 4, src: process.env.PUBLIC_URL + "/assets/4.png", title: "Graphic Designing", category: "design" },
    { id: 5, src: process.env.PUBLIC_URL + "/assets/5.png", title: "Creative Designs", category: "design" },
    { id: 6, src: process.env.PUBLIC_URL + "/assets/6.png", title: "Logos, Poster Designs", category: "design" },
    { id: 7, src: process.env.PUBLIC_URL + "/assets/7.png", title: "Web Development", category: "development" },
    { id: 8, src: process.env.PUBLIC_URL + "/assets/8.png", title: "WPF-based Development", category: "development" },
    { id: 9, src: process.env.PUBLIC_URL + "/assets/9.png", title: "Web, Android, Software Development", category: "development" },
  ];

  const categories = ["all", "gaming", "design", "development"];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDesigns = activeCategory === "all"
    ? designs
    : designs.filter(design => design.category === activeCategory);

  return (
    <section id="designs" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Visual <span className="text-purple-600 dark:text-purple-400">Universe</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Every pixel, every gradient, every composition is a testament to my creative vision and meticulous execution.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium capitalize transition-all ${activeCategory === category
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Design Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredDesigns.map(design => (
            <div
              key={design.id}
              className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setActiveImage(design)}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={design.src}
                  alt={design.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/1A1A2E/F8F9FA?text=${design.title}`;
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">{design.title}</h3>
                  <p className="text-sm opacity-90 capitalize">{design.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute -top-12 right-0 text-white text-3xl hover:text-purple-400 transition-colors"
                onClick={() => setActiveImage(null)}
              >
                &times;
              </button>
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
                onError={(e) => {
                  e.target.src = `https://placehold.co/800x600/1A1A2E/F8F9FA?text=${activeImage.title}`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-xl font-bold">{activeImage.title}</h3>
                <p className="opacity-90 capitalize">{activeImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Design;