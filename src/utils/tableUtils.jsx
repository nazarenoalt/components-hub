export const getColumnStyles = () => {
  return {
    padding: "0 0.5rem",
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