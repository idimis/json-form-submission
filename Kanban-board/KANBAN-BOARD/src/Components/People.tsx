// src/components/People.tsx

import React from 'react';

const People: React.FC = () => {
  return (
    <div className="w-[394px] h-[256px] space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2>Design</h2>
          <img src="path/to/png1.png" alt="Design 1" />
          <img src="path/to/png2.png" alt="Design 2" />
        </div>
        <div>
          <h2>Engineering</h2>
          <img src="path/to/png3.png" alt="Engineering 1" />
          <img src="path/to/png4.png" alt="Engineering 2" />
        </div>
        <div>
          <h2>PM</h2>
          <img src="path/to/png5.png" alt="PM 1" />
          <img src="path/to/png6.png" alt="PM 2" />
        </div>
      </div>
    </div>
  );
};

export default People;
