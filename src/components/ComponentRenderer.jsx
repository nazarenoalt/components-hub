import { useContext } from "react";
import { AppContext } from "../context/appContext";

const ComponentRenderer = () => {
  // Acceder al contexto con useContext
  const { selectedComponent } = useContext(AppContext);

  return (
    <div className="p-4">
      {selectedComponent ? (
        selectedComponent
      ) : (
        <p>Selecciona un componente del menú lateral</p>
      )}
    </div>
  );
};

export default ComponentRenderer;