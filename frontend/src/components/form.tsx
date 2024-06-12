import { ChangeEvent } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Signup } from "@rudra_mittal/input-validation"
import axios from "axios"
import { useRecoilState } from "recoil"
import { userStateAtom } from "../Store/atom"
const BACKEND_URL = process.env.BACKEND_URL;
export const Form = ({ type }: { type: "signup" | "signin" }) => {
    console.log(BACKEND_URL);
    const [inputs, setInputs] = useState<Signup>({
        name: "",
        email: "",
        password: ""
    })
    const [userState, setUserState] = useRecoilState(userStateAtom);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit() {

        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, inputs);
            localStorage.setItem("Authorization", res.data.jwt);

        // console.log(`${BACKEND_URL}/api/v1/user/${type}`);
    }catch(e){
        console.log(e.response.data.error);
        setError(true);
        return;
       
    }
        console.log(userState);
        const user = await axios.get(`${BACKEND_URL}/api/v1/user/info`, {
            headers: {
                Authorization: localStorage.getItem("Authorization")
            }
        });
        console.log(user);
        localStorage.setItem("sign in","true");
        localStorage.setItem("name", user.data.name);
        localStorage.setItem("email", user.data.email);
        localStorage.setItem("id", user.data.id);
        navigate("/blog");

    }
    return (
        <div className="flex flex-col   justify-center ">
            {(error)?<div className="text-red-500 text-center font-black">{(type=='signin')?"Email or password is incorrect":"User exist, with this email "}</div>:null}
            <div className=" text-4xl  text-center p-3/4 font-black">
                Create an account
            </div>
            <div className="font-light text-center mb-6 ">
                {(type == "signup") ? "Already have an account?" : "Don't have an account?"} <Link to={(type == "signin") ? "/signup" : "/signin"} className="text-blue-500 underline">{(type == "signin") ? "sign up" : "sign in"}</Link>
            </div>
            {(type == "signup") ? <FormProps label={"Username"} onChange={(e) => {
                setInputs({
                    ...inputs,
                    name: e.target.value
                })
            }} placeholder={"Enter your username"} /> : null}

            <FormProps label={"Email"} type={"email"} onChange={(e) => {
                setInputs({
                    ...inputs,
                    email: e.target.value
                })
            }} placeholder={"abc@example.com"} />

            <FormProps label={"Password"} type={"password"} onChange={(e) => {
                setInputs({
                    ...inputs,
                    password: e.target.value
                })
            }} placeholder={"Enter your Password"} />

            <button type="button" onClick={handleSubmit} className="text-white mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type}</button>
        </div>

    )
}
interface Inputs {
    label: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}
function FormProps({ label, type, onChange, placeholder }: Inputs) {

    return (
        <div className="">
            <label htmlFor={label} className="font-bold text-large align-left ">{label}</label>
            <input placeholder={placeholder} type={type || "text"} id={label} onChange={onChange} className="bg-gray-50 my-2 border border-gray-300  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-bold  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
    )
}