
export const Error = ({er}:any) => {
    return (
        <div>
            <div className="flex h-screen flex-row justify-center ">
                <div className="flex flex-col w-3/4 mt-10">
                    <div className="flex flex-row justify-between">
                        <div className="text-2xl font-black font-sans tracking-widest antialiased">Error</div>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="text-2xl font-black font-sans tracking-widest antialiased">{er}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}