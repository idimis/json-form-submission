import React from 'react';
import Board from './components/Board';
import Cards from './components/Cards';
import ComponentsSection from './components/ComponentsSection';
import People from './components/People';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        <ComponentsSection />
        <People />
      </div>
      <Cards />
      <Board />
    </div>
  );
};

export default App;
