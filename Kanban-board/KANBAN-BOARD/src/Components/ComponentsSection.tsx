// src/components/Components.tsx

import React from 'react';

const ComponentsSection: React.FC = () => {
  return (
    <div className="w-[394px] h-[256px] space-y-4">
      <div className="grid grid-cols-5 gap-2">
        {['Lavender', 'Green', 'Grey', 'Pink', 'Base'].map((color) => (
          <div key={color} className={`bg-${color.toLowerCase()}-300 h-8 rounded`} />
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {['Lavender', 'Green', 'Grey', 'Pink', 'Base'].map((color) => (
          <div key={color} className={`bg-${color.toLowerCase()}-300 h-8 rounded`} />
        ))}
      </div>
    </div>
  );
};

export default ComponentsSection;
