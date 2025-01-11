import ComponentRenderer from "./components/ComponentRenderer"
import Sidebar from "./components/Sidebar"
import { AppProvider } from "./context/appContext"

function App() {

  return (
    <AppProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <ComponentRenderer />
      </div>
    </AppProvider>
  )
}

export default App
