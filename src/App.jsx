
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/layouts/nav"

import Footer from "./components/layouts/footer"
import Post from "./pages/post"
import React, { Suspense } from "react"
import Photos from "./pages/photos"
import Loading from "./components/loading"
import Todos from "./pages/todos"
import Users from "./pages/profile"
import Pagination from "./pages/pagination"


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

          <Route index path="/pagination" element={<Pagination datas={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} />} />

          <Route path="/post/:id" element={ <Post /> } />
          
          <Route path="/user/post/:id" element={ <Post /> } />

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
          
        </Routes>
      </BrowserRouter>
      </div>

    </div>
    <Footer/>

  </div> 
}

export default App
