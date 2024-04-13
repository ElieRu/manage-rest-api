
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/nav"
import Home from "./pages/home"

function App() {
  return <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="72">
    <div className="container-fluid">
      <Header></Header>
      <div className="content">
        <BrowserRouter>
        <Routes>
          <Route 
            index 
            path="/" 
            element={ <Home/> }
          />

          <Route path="/projects" element={<p>Projects</p>}></Route>
          <Route path="/about" element={<p>About</p>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  </div> 
}

export default App
