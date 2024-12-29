import { createContext, useState } from "react";
import ButtonList from "../components/ButtonList";
import AccordionList from"../components/AccordionList";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState("");

  const contextValue = {
    selectedComponent,
    setSelectedComponent,
    sidebarItems: [
      {name: "Accordion", component: <AccordionList />},
      {name: "Button", component: <ButtonList />},
    ]
  }

  return(
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}