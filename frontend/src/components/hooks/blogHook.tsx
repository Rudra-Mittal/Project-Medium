import { useEffect, useState } from "react";
// import { BACKEND_URL } from "../config";
import axios from "axios";
export const useBlogHook = () => {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.post(` http://localhost:8787/api/v1/blog/bulk`,{
            skip:0,
            take:100
        },{
            headers:{
                Authorization:localStorage.getItem("Authorization")
            },
           
        }).then((res) => {
            console.log(res);
            setBlogData(res.data);
            setLoading(false);
        }
        );
    }, []);
    // console.log(blogData);
    return { blogData, loading };
}
export const useBlogSingleHook = ({id}:any) => {
    const [blogData, setBlogData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8787/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("Authorization")
            }
        }).then((res) => {
              
            setBlogData(res.data);
            setLoading(false);
        }
        );
    }, []);
    return { blogData, loading };
}