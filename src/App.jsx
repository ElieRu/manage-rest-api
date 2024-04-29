
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/nav"
import Home from "./pages/home"
import Footer from "./components/footer"
import Users from "./pages/users"
import Post from "./pages/post"

function App() {
  return <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="72">
    <div className="container-fluid">
      <Header></Header>
      
      <div className="content">
        <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Home/> } />
          <Route path="/post/:id" element={ <Post /> } />
          <Route path="/user/:id" element={ <Users /> } />
          <Route path="/projects" element={<p>Projects</p>}></Route>
          <Route path="/about" element={<p>About</p>}></Route>
        </Routes>
      </BrowserRouter>
      </div>

    </div>
    <Footer/>

  </div> 
}

export default App
