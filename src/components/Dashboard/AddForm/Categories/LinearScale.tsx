import { useEffect } from "react";

interface LinearScaleProps {
  index: number;
  options: string[];
  onOptionsChange: (questionIndex: number, newOptions: string[]) => void;
}

const LinearScale: React.FC<LinearScaleProps> = ({
  index,
  options,
  onOptionsChange,
}) => {
  useEffect(() => {
    if (options.length !== 2) {
      onOptionsChange(index, ["1", "5"]);
    }
  }, [index, onOptionsChange, options]);

  const handleChange = (value: number, optionIndex: number) => {
    const num = Math.max(1, Math.min(50, value)); // Clamp value between 1 and 50
    const updated = [...options];
    updated[optionIndex] = String(num);
    onOptionsChange(index, updated);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-600">Linear Scale (1 to 50)</label>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={options[0] || ""}
          onChange={(e) => handleChange(Number(e.target.value), 0)}
          min={1}
          max={49}
          className="w-24 border px-3 py-2 rounded"
          placeholder="Min"
        />

        <input
          type="number"
          value={options[1] || ""}
          onChange={(e) => handleChange(Number(e.target.value), 1)}
          min={2}
          max={50}
          className="w-24 border px-3 py-2 rounded"
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default LinearScale;
