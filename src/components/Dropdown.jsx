const Dropdown = ({ options, value, onChange }) => {

  return (
    <div>
      <div className="flex border rounded bg-white p-2 bg-red-500">{value || "Select..."}</div>
      <div className="flex rounded bg-white"></div>
    </div>
  )
}

export default Dropdown