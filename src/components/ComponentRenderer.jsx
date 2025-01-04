import { useContext } from "react";
import { AppContext } from "../context/appContext";

const ComponentRenderer = () => {
  const { selectedComponent } = useContext(AppContext);

  return (
    <div className="w-screen h-full bg-gray-900 text-white p-4">
      {selectedComponent}
    </div>
  );
};

export default ComponentRenderer;