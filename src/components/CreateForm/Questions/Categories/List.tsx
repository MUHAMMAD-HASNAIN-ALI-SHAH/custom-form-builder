import useCreateFormStore from "@/store/useCreateFormStore";
import { X } from "lucide-react";

interface ListProps {
  index: number;
  options: string[];
}

const List: React.FC<ListProps> = ({ index, options }) => {
  const { onOptionsChange } = useCreateFormStore();
  const handleChange = (value: string, optionIndex: number) => {
    const updated = [...options];
    updated[optionIndex] = value;
    onOptionsChange(index, updated);
  };

  const addOption = () => {
    onOptionsChange(index, [...options, ""]);
  };

  const removeOption = (optionIndex: number) => {
    const updated = options.filter((_, i) => i !== optionIndex);
    onOptionsChange(index, updated);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option, idx) => (
        <div key={idx} className="flex items-center gap-2 w-full">
          <input
            value={option}
            onChange={(e) => handleChange(e.target.value, idx)}
            placeholder={`Option ${idx + 1}`}
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

export default List;
