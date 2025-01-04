import { useState } from "react"
import Dropdown from "../components/Dropdown"

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);
  const items = [
    {label: "Argentina", value: "argentina"},
    {label: "Chile", value: "chile"},
    {label: "Uruguay", value: "uruguay"},
    {label: "Bolivia", value: "bolivia"},
    {label: "Paraguay", value: "paraguay"},
  ]
  return (
    <div>
      <Dropdown options={items} value={selection} onChange={setSelection} />
    </div>
  )
}

export default DropdownPage