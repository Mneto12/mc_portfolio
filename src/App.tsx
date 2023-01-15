import Home from "./pages/home"
import Work from "./pages/work"
import { Layout } from "./styles/Layout.style"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Navbar>
      <Home/>
      <Work/>
    </Navbar>
  )
}

export default App
