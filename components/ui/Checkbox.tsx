type Props = {
  labelName: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({ labelName, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 border-gray-500"
        onChange={onChange}
      />
      <span className="text-sm text-gray-500">{labelName}</span>
    </div>
  );
}
