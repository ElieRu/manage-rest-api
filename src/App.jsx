
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/layouts/header"

import Footer from "./components/layouts/footer"
import Post from "./pages/post"
import React, { Suspense } from "react"
import Photos from "./pages/photos"
import Loading from "./components/other/loading"
import Todos from "./pages/todos"
import Users from "./pages/profile"
import NotFound from "./pages/404"

const Home = React.lazy(() => import("./pages/home"))
const Albums = React.lazy(() => import("./pages/albums"))

function App() {
  return <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="72">
    <div className="container">
      
      <Header></Header>
      
      <div className="content">
        <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Home/> } />
          <Route path="/post/:id" element={ <Post /> } />
          <Route path="/user/post/:id" element={ <Post /> } />
          <Route path="/user/:id" element={ <Users /> } />
          <Route path="/user/albums/:id" element={ <Albums/> }> </Route>
          <Route path="/user/albums/photos/:id" element={ <Photos/> }> </Route>
          <Route path="/user/todos/:userId" element={ <Todos/> }> </Route>
          <Route path="*" element={ <NotFound/> }> </Route>
        </Routes>
      </BrowserRouter>
      </div>

    </div>
    <Footer/>

  </div> 
}

export default App
