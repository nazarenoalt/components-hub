import React from "react";
import { getColumnStyles, getColumnWidth } from "../utils/tableUtils";

const TableItem = ({ children, columns, columnState }) => {
  
  return (
    <div className="flex shrink-0 ">
      {React.Children.map(children, (child, index) => {
        const styles = getColumnStyles();
        const colWidth = getColumnWidth(columns[index], columnState);

        return React.cloneElement(child, {
          columns,
          key: index,
          style: {...styles, width: colWidth+"px" || "200px"}
        });
      })}
    </div>
  );
};

export default TableItem;
