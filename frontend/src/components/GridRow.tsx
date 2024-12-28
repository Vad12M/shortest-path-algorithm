import React from 'react';

interface GridRowProps {
  value: string;
  index: number;
  onChange: (index: number, value: string) => void;
}

const GridRow: React.FC<GridRowProps> = ({ value, index, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full p-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        value={value}
        onChange={(e) => {
          onChange(index, e.target.value.replace(/[^.Xx]/g, ''));
        }}
        placeholder={`Row ${index + 1}`}
      />
    </div>
  );
};

export default GridRow;
