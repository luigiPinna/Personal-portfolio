import React, { useState } from 'react';
import professionalJourneyData from '../../constants/professionalJourney.json';

const ProfessionalJourney = () => {
  const [activeYear, setActiveYear] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600"></div>

        <div className="space-y-12">
          {professionalJourneyData.journey.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  item.type === 'work' ? 'bg-blue-600' : 'bg-green-500'
                }`}
              ></div>

              {/* Content */}
              <div
                className={`w-1/2 p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeYear === item.year
                    ? 'bg-blue-800 scale-105'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold">{item.title}</span>
                  <span className="text-blue-400">{item.year}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{item.description}</p>
                
                {item.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJourney; 