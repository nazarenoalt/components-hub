export const getColumnStyles = () => {
  // const columnColor = index % 2 === 0 ? "#f1f4f8" : "#F7FAFC"; // Tailwind colors bg-gray-300 and bg-gray-100
  return {
    padding: "0 0.5rem",
    // backgroundColor: columnColor,
    flexWrap: "wrap",
    wordWrap: "break-word",
    border: "1px solid gray",
    margin: "1px"
  };
};

export const getColumnWidth = (currentColumn, columnState) =>  {
  const colIndex = columnState.findIndex(colState => colState.name === currentColumn.name);
  return columnState[colIndex]?.width;
}