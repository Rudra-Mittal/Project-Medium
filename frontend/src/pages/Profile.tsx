import { Link } from "react-router-dom"
import { ProfileDropDown } from "../components/ProfileDropDown"

export const Profile = () => {
    return (
        <div>
            <div className="bg-slate-200 h-max py-2  border-3 rounded-full px-4 flex flex-row justify-between items-center">
                <div className="text-2xl font-black font-sans tracking-widest antialiased">
                    <Link to="/blog">Bloggy</Link>
                </div>
                <div>
                    <Link to={"/blog/editor"}>
                        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 my-1 text-center me-5 mb-2"> + Create</button>
                    </Link>
                    {/* This will contain the image of signed in user */}
                    <span><ProfileDropDown/></span>
                </div>
            </div>
            </div>
    )
}
