import { AppContext } from "../context/appContext";
import { useContext, useState } from "react";

const Sidebar = () => {
  const { setSelectedComponent, sidebarItems } = useContext(AppContext);
  const [activeItem, setActiveItem] = useState(null);

  const handleComponentLists = (e) => {
    const clickedName = e.target.getAttribute("name");
    const clickedComponent = sidebarItems.find(item => item.name === clickedName)?.component;
    setSelectedComponent(clickedComponent);
    setActiveItem(clickedName);
  };

  return (
    <aside className="w-60 bg-blue-500 min-h-screen fixed left-0 top-0 p-4">
      <h1 className="text-2xl font-semibold text-white">
        Components Hub
      </h1>
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <div
              role="button"
              name={item.name}
              className={`text-white border-b pt-4 hover:bg-blue-600 transition-all
                ${activeItem === item.name ? "bg-blue-600" : ""}`}
              onClick={handleComponentLists}
            >
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};


export default Sidebar;
