import { useRef } from "react";

const useResizeColumn = () => {
  const startXRef = useRef(0);
  const startWidth = useRef(0);
  const screenWidth = window.innerWidth;

  const handleMouseMoveRef = useRef(null);

  const handleMouseMove = (e) => {
    const deltaX = e.clientX - startXRef.current;
    let newColumnWidth;
    if(startWidth.current + deltaX >= 50) newColumnWidth = startWidth.current + deltaX;
    if(startWidth.current + deltaX < 50) newColumnWidth = 50;
    if(startWidth.current + deltaX > screenWidth) newColumnWidth = screenWidth;

    const tableWidth = handleMouseMoveRef.current.columnState
      .filter(col => col.name != handleMouseMoveRef.current.colName)
      .reduce((acc, column) => acc + column.width, 0)
      + newColumnWidth;

    handleMouseMoveRef.current.setColumnState((prev) => {
      return prev.map((column) => {
        if (column.name === handleMouseMoveRef.current.colName) {
          if(tableWidth <= window.innerWidth) return { ...column, width: newColumnWidth };
        }
        return column;
      });
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resizeColumn = (e, colName, columnState, setColumnState) => {
    startXRef.current = e.clientX;
    startWidth.current = e.target.parentElement.offsetWidth;

    handleMouseMoveRef.current = { colName, setColumnState, columnState };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return { resizeColumn };
};

export default useResizeColumn;
