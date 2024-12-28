import React, { useState } from 'react';
import './index.css';
import GridInput from './components/GridInput';
import { fetchShortestPath } from "./api/pathService";

const App: React.FC = () => {
  const [shortestPath, setShortestPath] = useState<any[]>([]);

  const handleSubmit = async (grid: string[], start: { x: number; y: number }, end: { x: number; y: number }) => {
    try {
      const path = await fetchShortestPath(grid, start, end);
      setShortestPath(path);
    } catch (error) {
      console.error('Failed to fetch shortest path.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Shortest Path Finder</h1>
      <GridInput onSubmit={handleSubmit}/>

      <h2 className="mt-8 text-2xl font-semibold text-gray-700">Shortest Path:</h2>
      <div className="mt-4">
        {shortestPath.length > 0 ? (
          <pre className="bg-gray-200 p-6 rounded-lg text-lg">{JSON.stringify(shortestPath, null, 2)}</pre>
        ) : (
          <p className="text-gray-500">No path found yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;
