import { useContext } from "react";
import { AppContext } from "../context/appContext";

const ComponentRenderer = () => {
  const { selectedComponent } = useContext(AppContext);
  
  return (
    <main className="flex-1 ml-60 bg-gray-900 min-h-screen text-white p-4">
      {selectedComponent}
    </main>
  );
};

export default ComponentRenderer;