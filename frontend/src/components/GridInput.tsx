import React, { useState } from 'react';
import GridRow from './GridRow';
import PositionInput from './PositionInput';

type Point = {
  x: number;
  y: number;
};

interface GridInputProps {
  onSubmit: (grid: string[], start: Point, end: Point) => void;
}

const GridInput: React.FC<GridInputProps> = ({ onSubmit }) => {
  const [grid, setGrid] = useState<string[]>(['.....', '.....', '.....']);
  const [start, setStart] = useState<Point>({ x: 0, y: 0 });
  const [end, setEnd] = useState<Point>({ x: 2, y: 2 });

  const handleGridChange = (index: number, value: string) => {
    const newGrid = [...grid];
    newGrid[index] = value;
    setGrid(newGrid);
  };

  const handleStartChange = (field: 'x' | 'y', value: number) => {
    setStart({ ...start, [field]: value });
  };

  const handleEndChange = (field: 'x' | 'y', value: number) => {
    setEnd({ ...end, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(grid, start, end);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Set Grid and Positions</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-lg font-semibold mb-2">Grid (use '.' for free cells and 'X' for blocked cells):</label>
          {grid.map((row, index) => (
            <GridRow key={index} value={row} index={index} onChange={handleGridChange} />
          ))}
        </div>

        <PositionInput
          label="Start Position"
          value={start}
          onChange={handleStartChange}
        />

        <PositionInput
          label="End Position"
          value={end}
          onChange={handleEndChange}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-6"
      >
        Find Shortest Path
      </button>
    </form>
  );
};

export default GridInput;
