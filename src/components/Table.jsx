import React, {  useState } from "react";
import { getColumnStyles } from "../utils/tableUtils";
import useResizeColumn from "../hooks/use-resize-column";

const Table = ({ children, columns, editable }) => {
  const [columnState, setColumnState] = useState(columns);
  const { resizeColumn } = useResizeColumn();
  return (
    <div className="inline-flex flex-col">
      <div className="inline-flex shrink-0">
        {columns.map((column, index) => {
          const styles = getColumnStyles();
          const colIndex = columnState.findIndex(col => col.name === column.name);
          const colWidth = columnState[colIndex].width;

          return (
            <div style={{...styles, width: `${colWidth+"px" || "200px"}`}} key={index} className="relative">
              {column.name}
              <div className="absolute right-4 top-[10%] cursor-pointer hover:scale-[110%] transition-all w-6 h-6">
                <img src="../src/assets/filter.svg"/>
              </div>
              {editable && (
                <div 
                  className="absolute rounded hover:bg-blue-500 w-1 h-full right-0 top-0 cursor-pointer hover:scale-[110%] transition-all"
                  onMouseDown={e => resizeColumn(e, column.name, columnState, setColumnState)}
                ></div>
            )}
            </div>
          );
        })}
      </div>

      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { columns, columnState, key: index });
      })}
    </div>
  );
};

export default Table;
