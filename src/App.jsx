
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/nav"

import Footer from "./components/footer"
import Users from "./pages/users"
import Post from "./pages/post"
import React, { Suspense } from "react"
import Photos from "./pages/photos"
// import Home from "./pages/home"
import Loading from "./components/posts/loading"
// import About from "./pages/about"
import GetLoading from "./pages/getLoading"
import Todos from "./pages/todos"


const Home = React.lazy(() => import("./pages/home"))
const LazyAbout = React.lazy(() => import("./pages/getLoading"))
const Albums = React.lazy(() => import("./pages/albums"))
const About = React.lazy(() => import("./pages/about"))

function App() {
  return <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="72">
    <div className="container">
      
      <Header></Header>
      
      <div className="content">
        <BrowserRouter>
        <Routes>

          <Route index path="/" element={
            <Suspense fallback={<Loading/>}>
              <Home/>
            </Suspense> }>
          </Route>

          <Route path="/post/:id" element={ <Post /> } />
          <Route path="/user/:id" element={ <Users /> } />
          
          <Route path="/user/albums/:id" element={ 
            <Suspense fallback={<div style={{marginTop: '200px'}}>Loading...</div>}>
              <Albums/>
            </Suspense>
          }> </Route>

          <Route path="/user/albums/photos/:id" element={ 
            <Suspense fallback={<div style={{marginTop: '200px'}}>Loading...</div>}>
              <Photos/>
            </Suspense>
          }> </Route>

          <Route path="/user/todos/:userId" element={ 
            <Suspense fallback={<div style={{marginTop: '200px'}}>Loading...</div>}>
              <Todos/>
            </Suspense>
          }> </Route>

          <Route path="/about" element={ 
            <Suspense fallback={ <GetLoading/> }>
              <About/>
            </Suspense>
          }> </Route>
          
        </Routes>
      </BrowserRouter>
      </div>

    </div>
    <Footer/>

  </div> 
}

export default App
