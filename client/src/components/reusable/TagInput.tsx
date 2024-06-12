import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { MdAdd, MdClose } from "react-icons/md";

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTag();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="flex items-center bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2 mb-2">
            #{tag}
            <button
              onClick={() => handleRemoveTag(tag)}
              className="ml-1 text-red-500 hover:text-red-700"
            >
              <MdClose />
            </button>
          </span>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Add Tags"
          className="text-xl py-1 text-slate-950 w-[200px] border-2 border-primary rounded-md px-1 outline-none"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="ml-2 border-2 duration-200 p-0.5 hover:text-white hover:bg-primary text-primary border-primary rounded-lg"
          onClick={handleAddTag}
        >
          <MdAdd className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
