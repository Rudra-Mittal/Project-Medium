import { Link } from "react-router-dom";
import { ProfileDropDown } from "./ProfileDropDown";

export const Appbar = () => {
    const handleClick = () => {
        console.log("Clicked")
    }
   
    return (
        <div className="bg-slate-200 h-max py-2  border-3 rounded-full px-4 flex flex-row justify-between items-center">
               
            <div className="text-2xl font-black font-sans tracking-widest antialiased">
               <Link to="/blog">Bloggy</Link>
            </div>
            <div className="flex items-center" >
                <Link to={"/blog/editor"}>
            <button type="button" className="hidden sm:block text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 my-1 text-center me-20 mb-2  " onClick={handleClick}> + Create</button>
                </Link>
                {/* This will contain the image of signed in user */}
                
                <div className="z-40 absolute top-50 right-5"><ProfileDropDown/></div>
            </div>
        </div>
    )
}