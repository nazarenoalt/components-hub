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
      <div
        className={`flex flex-col border rounded bg-white text-black w-fit min-w-28 absolute ${isOpen ? "visible" : "invisible"}`}
      >{options.map((option, index) => (
        <div key={index} tabIndex="0" className="hover:bg-blue-500 px-2" onClick={e => handleSelectOption(e, option)} onKeyDown={e => handleSelectOption(e, option)}>{option.label}</div>
      ))}</div>
    </div>
  )
}

export default Dropdown