"use client";
import useCreateFormStore from "@/store/useCreateFormStore";
import { useEffect } from "react";

interface LinearScaleProps {
  index: number;
  options: string[];
}

const LinearScale: React.FC<LinearScaleProps> = ({ index, options }) => {
  const { onOptionsChange } = useCreateFormStore();
  useEffect(() => {
    if (options.length !== 2) {
      onOptionsChange(index, ["0", "5"]);
    }
  }, [index, onOptionsChange, options]);

  const handleChange = (value: number, optionIndex: number) => {
    let num = value;
    const updated = [...options];

    if (optionIndex === 0) {
      // Only allow 0 or 1
      num = value === 0 || value === 1 ? value : 0;
    } else {
      // Only allow 2–10
      num = Math.max(2, Math.min(10, value));
    }

    updated[optionIndex] = String(num);
    onOptionsChange(index, updated);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-600">Linear Scale (0 or 1 to 2–10)</label>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={options[0] || ""}
          onChange={(e) => handleChange(Number(e.target.value), 0)}
          min={0}
          max={1}
          className="w-24 border px-3 py-2 rounded"
          placeholder="Min (0 or 1)"
        />

        <input
          type="number"
          value={options[1] || ""}
          onChange={(e) => handleChange(Number(e.target.value), 1)}
          min={2}
          max={10}
          className="w-24 border px-3 py-2 rounded"
          placeholder="Max (2–10)"
        />
      </div>
    </div>
  );
};

export default LinearScale;
