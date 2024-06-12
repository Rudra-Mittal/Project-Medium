import { BrowserRouter, Route,Routes } from 'react-router-dom'
import {Signup} from "./pages/signup"
import {Signin} from "./pages/signin"
import {Blog} from "./pages/blog"
import {BlogSingle} from "./pages/blogSingle"
import { CreateBlog } from './pages/createBlog'
import { Profile } from './pages/Profile'
import { UserBlogs } from './pages/userBlogs'
import { Error } from './components/error'
import './App.css'
import {Auth} from "./pages/auth"
import {RecoilRoot} from 'recoil'
// import { BlogWriter } from './components/blogWriter'

function App() {
  return (
    <>
      <BrowserRouter>
       <RecoilRoot>
      <Routes>

       <Route path="/" element={<Auth/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/blog/editor" element={<CreateBlog/>}></Route>
        <Route path="/profile/posts" element={<UserBlogs/>}></Route>
        <Route path="/Blog/:id" element={<BlogSingle/>}></Route>
        <Route path="/" element={<Error/>}></Route>
      </Routes>
       </RecoilRoot>
      </BrowserRouter>
    </>
  )
}

export default App
