interface BlogCardProps {
    id:string;
    authorImg: string;
    name: string;
    title: string;
    content: string;
    date: Date;
}
export const MainBlogCard = ({ id,authorImg,name,title,content,date }: BlogCardProps) => {
    return (
        <div className="grid grid-cols-12 w-full mt-14">
           <div className="px-5 col-span-12 lg:col-span-8">
                <div className="text-5xl font-black leading-normal">
                     {title}
                </div>
                <div className="my-3 text-small font-light  ">
                    posted on {date.toDateString().slice(3)}
                </div>
                <div className="text-2xl  p-3/4 text-justify leading-relaxed">
                <div className="text-small p-3/4" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
           </div>
           <div className="invisible lg:visible lg:col-span-4 ml-3 flex flex-col">
                <div className="flex flex-col ">
                    <span className="font-thin text-xl">Author</span>
                    <div className="align-center mt-5">
                    <img className="w-24 h-24 p-1 inline mr-3  rounded-full" src={"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"} alt="Bordered avatar"></img>
                    <span className="text-2xl font-bold">
                        {name||"Guest user"}
                    </span>
                    </div>
                </div>
           </div>
        </div>
    )
}