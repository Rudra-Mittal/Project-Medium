import { Link } from "react-router-dom"
interface BlogCardProps {
    id:string;
    authorImg: string;
    name: string;
    title: string;
    content: string;
    date: Date;
}
export const BlogCard = ({authorImg,name,title,content,date,id}:BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
        
        <div className="flex mr-2 flex-col border-b-2  text-justify">
            <div className="info my-2 ">
            <Avatar imgLink={authorImg}/> 
            <span className="mr-2">{name}</span>   
            <span className="font-extralight dark:text-gray-600 text-sm"> &#9679;{date.toDateString().slice(3)}</span>
            </div>
            <div className="text-2xl font-black">
                {title}
            </div>
            <div className="text-small  p-3/4">
                {(content.length>100)?content.slice(0, 100)+"...":content}
            </div>
            <div className="footer pb-3">
                {Math.floor(content.length/100)+"min read"}
            </div>
        </div></Link>
    )
}

export function Avatar({imgLink}:any){
    console.log(imgLink);
    return <img className="w-11 h-11 p-1 inline  rounded-full" src={imgLink} alt="Bordered avatar"></img>
}