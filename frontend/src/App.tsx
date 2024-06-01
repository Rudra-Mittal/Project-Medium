import { BrowserRouter, Route,Routes } from 'react-router-dom'
import {Signup} from "./pages/signup"
import {Signin} from "./pages/signin"
import {Blog} from "./pages/blog"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/Blog/:id" element={<Blog/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
