import Sidebar from "./components/Sidebar"
import { AppProvider } from "./context/appContext"

function App() {

  return (
    <AppProvider>
      <Sidebar />
    </AppProvider>
  )
}

export default App
