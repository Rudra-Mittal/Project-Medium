import { BrowserRouter, Route,Routes } from 'react-router-dom'
import {Signup} from "./pages/signup"
import {Signin} from "./pages/signin"
import {Blog} from "./pages/blog"
import {BlogSingle} from "./pages/blogSingle"
import { CreateBlog } from './pages/createBlog'
import { Profile } from './pages/Profile'
import './App.css'
// import { BlogWriter } from './components/blogWriter'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/blog/editor" element={<CreateBlog/>}></Route>
        <Route path="/Blog/:id" element={<BlogSingle/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
