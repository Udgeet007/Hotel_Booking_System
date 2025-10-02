import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home';


function App() {
  const isOwnerPath = useLocation().pathname.includes('owner');

  return (
   <>
   <div>
     { !isOwnerPath && <Navbar/>}
   </div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
   </>
  )
}

export default App
