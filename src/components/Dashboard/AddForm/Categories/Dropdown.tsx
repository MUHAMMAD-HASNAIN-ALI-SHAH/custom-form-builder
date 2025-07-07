import { X } from "lucide-react";

interface DropdownProps {
  index: number;
  options: string[];
  onOptionsChange: (index: number, newOptions: string[]) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ index, options, onOptionsChange }) => {
  const handleChange = (value: string, idx: number) => {
    const updated = [...options];
    updated[idx] = value;
    onOptionsChange(index, updated);
  };

  const addOption = () => {
    onOptionsChange(index, [...options, ""]);
  };

  const removeOption = (idx: number) => {
    const updated = options.filter((_, i) => i !== idx);
    onOptionsChange(index, updated);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {options.map((option, idx) => (
        <div key={idx} className="flex items-center gap-2 w-full">
          <input
            value={option}
            onChange={(e) => handleChange(e.target.value, idx)}
            placeholder={`Dropdown Option ${idx + 1}`}
            className="border px-3 py-2 rounded-md w-full"
          />
          <span onClick={() => removeOption(idx)} className="cursor-pointer">
            <X />
          </span>
        </div>
      ))}
      <button
        type="button"
        onClick={addOption}
        className="text-blue-600 text-sm hover:underline"
      >
        + Add Option
      </button>
    </div>
  );
};

export default Dropdown;
