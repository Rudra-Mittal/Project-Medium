import { BlogCard } from "../components/blogCard"
import { Appbar } from "../components/appbar"
import { useBlogHook } from "../components/hooks/blogHook"
import { Skeleton } from "../components/Blogskeletons"
// import { ProgressComponent } from "../components/progress"
import { motion, useScroll, useSpring } from "framer-motion"
export const Blog=()=>{
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    const {loading,blogData}=useBlogHook();
    if(loading){

        return(
        <div>
           <Skeleton/>
           <Skeleton/>
           <Skeleton/>
           <Skeleton/>
           <Skeleton/>
        </div>
        )
    }
    return (
        <>
        <div className="w-screen  m-auto">
        <motion.div className=" origin-left fixed top-0 left-0 right-0 h-1 bg-red-500 " style={{ scaleX }} />  
            <Appbar/>
        <div className="flex flex-col w-fit m-auto">
            {
            blogData.map((blog:any)=>
                <BlogCard authorImg="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" id={blog.id} name={blog.author.name||"Guest"} title={blog.title} content={blog.content} date={(new Date(blog.createdAt))}/>
            )}
        </div>
        </div>
        </>
    )

}