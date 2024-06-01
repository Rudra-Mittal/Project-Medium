import { Quoute } from "../components/quoute"
import { Form } from "../components/form"
export const Signup=()=>{
    return (
        <div className="grid lg:grid-cols-2 md:grids-cols-1">
           <div className="flex h-screen flex-row justify-center ">
           <Form type={"signup"}/>
           </div>
        <div className="invisible lg:visible">
        <Quoute/>
        </div>
        </div>
    )

}