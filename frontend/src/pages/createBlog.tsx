import  { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Appbar } from '../components/appbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../components/config';
// import { BACKEND_URL } from '../config';
export const CreateBlog=()=> {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
        const handlePublish = () => {
            const res=axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title:title,
                content:value
            },{
                headers:{
                    Authorization:localStorage.getItem("Authorization"),
                    "Content-Type":"text/html"
                },
            }).then((res)=>{
                navigate("/blog");
                console.log(res);
            }).catch((e:any)=>{
                setError(true);
                console.log(e);
            })
        }
    return (
        <div className='' >
                <Appbar/>
                {(error)?<div className="text-red-500 text-center font-black">Title or Content Can not be empty</div>:null}
                <div className="mb-6 flex flex-row align-center justify-center">
        <input type="text" value={title} onChange={(e)=>{
            setTitle(e.target.value);
        
        }} placeholder='Enter Title' id="large-input" className=" my-6 inline w-auto font-black text-xl  p-4  border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
</div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <button  onClick={handlePublish} type="button" className="mt-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mx-auto mb-2 dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800">Publish</button>
        </div>
    )
}