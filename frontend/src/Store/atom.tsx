import { atom } from "recoil";

export const userStateAtom = atom({
    key: "userState",
    default: {
        token: "",
    },
});
// export const userDetailAtom = atom({
//     key: "userDetail",
//     default:{
//         name:"Guest User",
//         email:"",
//         id:"",
//         authorImg:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
//     }
//     })