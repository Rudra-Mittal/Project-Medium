import { Appbar } from "../components/appbar"
import { useBlogSingleHook } from "../components/hooks/blogHook"
import { useParams } from "react-router-dom"
import { MainBlogCard } from "../components/mainBlogCard"
export const BlogSingle=()=>{
    const {id}=useParams();
    const {loading,blogData}=useBlogSingleHook({id});
    // console.log(id);
    if(loading){
        return <div>Loading...</div>
    }else if(!blogData){
        return <div>Blog not found</div>
    }
    return (
        
        <div className="w-screen m-auto">
            <Appbar/>
            <MainBlogCard id={blogData.id} name={blogData.name} authorImg="" title={blogData.title} content={blogData.content} date={(new Date(blogData.createdAt))} />
        </div>
    )

}