
import { AppContext } from "../context/appContext";
import { useContext } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { selectedComponent, setSelectedComponent, sidebarItems } = useContext(AppContext);
  console.log(sidebarItems);

  return (
    <section className="bg-blue-500 w-60 h-screen p-4">
      <h1 className="text-2xl font-semibold text-white">
        Components Hub
      </h1>

      <ul>
        {sidebarItems.map((item, index)=> {
          return(
            <li key={index}>
              <SidebarItem name={item.name} component={item.component} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Sidebar