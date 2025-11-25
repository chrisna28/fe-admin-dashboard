import Input from "./Input";

type Props = {
  labelName: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function Form({
  labelName,
  type,
  onChange,
  placeholder,
}: Props) {
  return (
    <div className="flex flex-col w-full gap-1.5">
      <p className="text-black font-semibold text-m">{labelName}</p>
      <Input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
