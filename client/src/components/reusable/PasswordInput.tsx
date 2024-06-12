import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface PasswordInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const PasswordInput = ({ onChange, value, placeholder }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex bg-transparent items-center border-[1.5px] max-h-[50px] mb-4 px-5 rounded">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        className="input-box text-lg w-full bg-transparent py-3 rounded my-4 min-w-[300px] outline-none"
      />
      <div>
        {showPassword ? (
          <FaRegEyeSlash
            className="text-gray-500 cursor-pointer"
            size={22}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <MdOutlineRemoveRedEye
            className="text-blue-500 cursor-pointer"
            size={22}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;