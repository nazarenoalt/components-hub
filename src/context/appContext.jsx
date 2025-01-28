import { createContext, useState } from "react";
import ButtonPage from "../pages/ButtonPage";
import AccordionPage from"../pages/AccordionPage";
import DropdownPage from"../pages/DropdownPage";
import ModalPage from "../pages/ModalPage";
import TablePage from "../pages/TablePage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(TablePage);
  const [columnState, setColumnState] = useState();

  const contextValue = {
    selectedComponent,
    setSelectedComponent,
    columnState,
    setColumnState,
    sidebarItems: [
      {name: "Accordion", component: <AccordionPage />},
      {name: "Button", component: <ButtonPage />},
      {name: "Dropdown", component: <DropdownPage />},
      {name: "Modal", component: <ModalPage />},
      {name: "Table", component: <TablePage />},
    ]
  }

  return(
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}