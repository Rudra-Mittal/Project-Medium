export const Skeleton=()=>{
    return(
        <div>
             <div role="status" className="sm:max-w-sm m-auto mt-5 w-screen  animate-pulse">
            <div className="flex w-max h-max items-center my-4">
            <div className=" w-10 h-10  rounded-full bg-gray-200 "></div>
            <div className="h-2.5  bg-gray-200 mt-2 mx-3  rounded-full w-24 mb-4  "></div>
            </div>

            <div className="h-7 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        <span className="sr-only">Loading...</span>
    </div>
        </div>
    )
}