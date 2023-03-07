import React from 'react';
import ShoppingList from './components/ShoppingList';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">My Shopping List</h1>
      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <ShoppingList />
        </div>
        <div className="w-1/2">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
