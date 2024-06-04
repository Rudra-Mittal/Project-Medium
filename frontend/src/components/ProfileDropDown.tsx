import  { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
export const ProfileDropDown=()=>{
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleSignout = () => {
    if(!localStorage.getItem("sign in")){
       navigate("/signin");
       return ;
    }
    localStorage.removeItem("sign in");
    localStorage.removeItem("Authorization");
    localStorage.setItem("name","Anonymus");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.setItem("authorImg","https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg");
   

   navigate("/blog");
  }
    return (


<nav className="inline bg-white border-gray-200 dark:bg-gray-900">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="absoute z-40 flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt="user photo"/>
        </button>
      {isOpen&&(
        <div className="z-40 w-max my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700  absolute  top-10 right-10 " id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-white-900  ">{localStorage.getItem("name")}</span>
          <span className="block text-sm  text-gray-500 truncate ">{localStorage.getItem("email")}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link to={"/profile"}>
            <div  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</div>
            </Link>
          </li>
          <Link to={"/profile/posts"}>
          <li>
            <div  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Posts</div>
          </li>
          </Link>
          <Link to="/blog/editor">
          <li>
            <div  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Create post</div>
          </li>
          </Link>
          <li>
            <div  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={handleSignout}>{(localStorage.getItem("sign in"))?"Sign out":"Sign in"}</div>
          </li>
        </ul>
      </div>
      )}
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
  </div>
  </div>
</nav>

    )
}