import { useState } from "react"

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (e, option) => {
    if (e.type == "keydown" && e.key !== "Enter") return;
    onChange(option);
    setIsOpen(!isOpen);
  }

  return (
    <div className="cursor-pointer">
      <div
        className="flex border rounded bg-white p-2 text-black w-fit min-w-28"
        onClick={e => toggleDropdown(e)}
        onKeyDown={e => toggleDropdown(e)}
        tabIndex="0"
      >
          {value.label || "Select..."}
      </div>
      <div>
        <div
          className={`flex flex-col border rounded bg-white text-black w-fit min-w-28 absolute ${isOpen && "hidden"}`}
        >
          {options.map((option, index) => (
            <div key={index} tabIndex="0" className="hover:bg-blue-500 px-2 z-10" onClick={e => handleSelectOption(e, option)} onKeyDown={e => handleSelectOption(e, option)}>{option.label}</div>
          ))}
        </div>
        <div className={`absolute inset-0 cursor-pointer ${isOpen && "hidden"}`} onClick={e => toggleDropdown(e)}></div>
      </div>
    </div>
  )
}

export default Dropdown