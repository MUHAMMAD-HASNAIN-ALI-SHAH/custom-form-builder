import React, { useState } from "react";

const LinearScale = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(5);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMin(value);
    if (value >= max) {
      setMax(value + 1);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setMax(value);
    if (value <= min) {
      setMin(value - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={min}
          min={0}
          max={9}
          onChange={handleMinChange}
          className="w-20 border px-2 py-1 rounded"
          placeholder="Min"
        />
        <span className="text-gray-600">to</span>
        <input
          type="number"
          value={max}
          min={1}
          max={10}
          onChange={handleMaxChange}
          className="w-20 border px-2 py-1 rounded"
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default LinearScale;
