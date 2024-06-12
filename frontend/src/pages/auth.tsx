import { Link } from "react-router-dom";
// import { GoogleLogin } from 'react-google-login';

export const Auth = () => {
  const responseGoogle = (response:any) => {
    console.log(response);
    // You can use the response to sign up or log in the user
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="text-4xl font-black font-sans tracking-widest antialiased">Welcome to Blogify</div>
      <div className="text-2xl font-black font-sans tracking-widest antialiased">Create and share your blogs</div>
      <div className="flex flex-row mt-5">
        <Link to="/signup" className="bg-blue-500 text-white p-2 rounded-md mr-2">Sign Up</Link>
        <Link to="/signin" className="bg-blue-500 text-white p-2 rounded-md">Sign In</Link>
      </div>
      <GoogleLogin
        clientId="356198363933-r348321m1oddg7sodgrvis9p2cichun3.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}