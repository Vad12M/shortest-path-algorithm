import React from 'react';

interface PositionInputProps {
  label: string;
  value: { x: number, y: number };
  onChange: (field: 'x' | 'y', value: number) => void;
}

const PositionInput: React.FC<PositionInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <label className="w-1/3 text-lg font-semibold">{label}</label>
      <div className="flex space-x-4">
        <input
          type="number"
          className="p-2 w-20 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={value.x}
          onChange={(e) => onChange('x', parseInt(e.target.value))}
          placeholder="X"
        />
        <input
          type="number"
          className="p-2 w-20 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={value.y}
          onChange={(e) => onChange('y', parseInt(e.target.value))}
          placeholder="Y"
        />
      </div>
    </div>
  );
};

export default PositionInput;
