import { Avatar } from "./blogCard";
import { Link } from "react-router-dom";
export const Appbar = () => {
    return (
        <div className="bg-slate-200 h-max py-2  border-3 rounded-full px-4 flex flex-row justify-between items-center">
            <div className="text-2xl font-black font-sans tracking-widest antialiased">
               <Link to="/blog">Bloggy</Link>
            </div>
            <div>
                {/* This will contain the image of signed in user */}
                <Avatar imgLink={"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"}/>
            </div>
        </div>
    )
}