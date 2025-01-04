import { createContext, useState } from "react";
import ButtonPage from "../pages/ButtonPage";
import AccordionPage from"../pages/AccordionPage";
import DropdownPage from"../pages/DropdownPage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(ButtonPage);

  const contextValue = {
    selectedComponent,
    setSelectedComponent,
    sidebarItems: [
      {name: "Accordion", component: <AccordionPage />},
      {name: "Button", component: <ButtonPage />},
      {name: "Dropdown", component: <DropdownPage />},
    ]
  }

  return(
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}