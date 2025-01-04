
import { AppContext } from "../context/appContext";
import { useContext } from "react";

const Sidebar = () => {
  const {setSelectedComponent, sidebarItems } = useContext(AppContext);

  const handleComponentLists = (e) => {
    const clickedComponent = sidebarItems.filter(item => item.name === e.target.getAttribute("name"))[0]?.component;
    setSelectedComponent(clickedComponent)
  }

  return (
    <section className="bg-blue-500 w-60 h-screen p-4">
      <h1 className="text-2xl font-semibold text-white">
        Components Hub
      </h1>

      <ul>
        {sidebarItems.map((item, index)=> {
          return(
            <li key={index}>
              <div role="button" name={item.name} className="text-white border-b pt-4 hover:bg-blue-600 transition-all" onClick={handleComponentLists}>
                <span>{item.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Sidebar