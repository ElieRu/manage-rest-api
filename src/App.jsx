
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/layouts/nav"

import Footer from "./components/layouts/footer"
// import profile from "./pages/profile"
import Post from "./pages/post"
import React, { Suspense } from "react"
import Photos from "./pages/photos"
import Loading from "./components/posts/loading"
import Todos from "./pages/todos"


const Home = React.lazy(() => import("./pages/home"))
const Albums = React.lazy(() => import("./pages/albums"))

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
          <Route path="/profile/:id" element={ <profiles /> } />
          
          <Route path="/profile/albums/:id" element={ 
            <Suspense fallback={<div style={{marginTop: '200px'}}>Loading...</div>}>
              <Albums/>
            </Suspense>
          }> </Route>

          <Route path="/profile/albums/photos/:id" element={ 
            <Suspense fallback={<div style={{marginTop: '200px'}}>Loading...</div>}>
              <Photos/>
            </Suspense>
          }> </Route>

          <Route path="/profile/todos/:profileId" element={ 
            <Suspense fallback={<div style={{marginTop: '200px'}}>Loading...</div>}>
              <Todos/>
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
