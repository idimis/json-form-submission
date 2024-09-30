// src/components/Cards.tsx

import React from 'react';

const Cards: React.FC = () => {
  return (
    <div className="w-[300px] h-[672px] p-4 space-y-4">
      <div className="bg-pink-300 p-2 rounded">
        <h2 className="text-center">Cards Combinations</h2>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold">Card Title</h3>
        <p className="text-gray-500">A description of a task.</p>
        <div className="space-y-2 mt-2">
          <div className="flex items-center">
            <span className="w-4 h-4 border border-gray-500 mr-2"></span>
            <span>Task 1</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 border border-gray-500 mr-2"></span>
            <span>Task 2</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 border border-gray-500 mr-2"></span>
            <span>Task 3</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold">Card Title</h3>
        <p className="text-gray-500">A description of a task.</p>
        <div className="space-y-2 mt-2">
          <div className="flex items-center">
            <span className="w-4 h-4 border border-gray-500 mr-2"></span>
            <span>Task 1</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 border border-gray-500 mr-2"></span>
            <span>Task 2</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 border border-gray-500 mr-2"></span>
            <span>Task 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
