import { useSingleUserBlogs } from "./hooks/blogHook";
import { Skeleton } from "./Blogskeletons";
import { BlogCard } from "./blogCard";
import { BACKEND_URL } from "./config";
import axios from "axios";
import { useState } from "react";
export const SingleUserBlog = () => {
    const {blogData,loading}=useSingleUserBlogs();
    const [error,setError]=useState(false);
    const handleEdit=(e)=>{
        axios.delete(`${BACKEND_URL}/api/v1/blog`,{
            headers:{
                Authorization:localStorage.getItem("Authorization")
            },
            data:{
                id:e.target.id
            }
        
        }).then(()=>{
            window.location.reload();
        }).catch((e:any)=>{
            setError(true);
            console.log(e);
        })
    }
    if(loading){
        return(
            <div>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </div>
        )
    }
    if(error){
        return(
            <div>
                <h1 className="">Some error occured</h1>
            </div>
        )
    }
    return (
        <div className="flex h-screen flex-row justify-center ">
            <div className="flex flex-col w-3/4 mt-10">
                <div className="flex flex-row justify-between">
                    <div className="text-2xl font-black font-sans tracking-widest antialiased">My Blogs</div>
                    
                </div>
                <div className="flex flex-col mt-5">
                {
            blogData.map((blog:any)=>
                <div className="flex flex-col">
                <BlogCard id={blog.id} authorImg="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"  name={blog.author.name||"Guest"} title={blog.title} content={blog.content} date={(new Date(blog.createdAt))}/>
                <button type="button" id={blog.id} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleEdit}>Delete</button>
                </div>
            )}
                </div>
            </div>
        </div>
    );
}
