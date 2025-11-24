type Props = {
  labelButton: string;
  variant?: "blue" | "gray" | "red";
};

export default function Button({ labelButton, variant = "blue" }: Props) {
  const variants = {
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    gray: "bg-gray-300 hover:bg-gray-400 text-black",
    red: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={`w-full py-2 px-4 rounded font-semibold ${variants[variant]}`}
    >
      {labelButton}
    </button>
  );
}
