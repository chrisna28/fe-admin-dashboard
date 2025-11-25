import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

type Props = {
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function Input({ type, placeholder, onChange }: Props) {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex w-full gap-2 border border-gray-300 rounded p-2.5 focus-within:border-blue-500">
      <div className="flex-1 justify-center items-center">
        <input
          type={isPassword ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full text-base text-black focus:outline-none"
          onChange={onChange}
        />
      </div>

      {isPassword && (
        <div className="flex justify-between items-center">
          <button type="button" onClick={() => setShow(!show)}>
            {show ? (
              <EyeIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <EyeSlashIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
