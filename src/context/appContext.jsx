import { createContext, useState } from "react";
import ButtonPage from "../pages/ButtonPage";
import AccordionPage from"../pages/AccordionPage";
import DropdownPage from"../pages/DropdownPage";
import ModalPage from "../pages/ModalPage";

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
      {name: "Modal", component: <ModalPage />},
    ]
  }

  return(
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}