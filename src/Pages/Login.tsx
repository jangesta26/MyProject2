import { useState } from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';



export const Login = () => {

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [loginReg, setLoginReg] = useState("");


  function handleLogin(event:any){
    event.preventDefault();
    
    Axios.post('/tbl_login',{
      username: usernameLogin,
      password: passwordLogin,

    }).then((res) => {
      if(res.data.message){
        alert(res.data.message)
      } else {
        alert(res.data.message)
        alert(res.data[0].id)
        setLoginReg(res.data[0].id)
      }
    })
  }
 
  return (
    <>
    <div  className="mt-10 ">
      <div className="mx-auto xl:w-[30%] bg-white shadow-lg px-[50px] py-8 rounded-[20px]" >
        <h1 className="font-bold text-[26px]">
          Login here
          </h1>
          <h2 className="mt-6 font-light">
            Nice to meet you! Enter your details to login.
          </h2>
          <form className="mt-8 mb-2 xl:w-[100%] max-w-screen-lg sm:w-[100%]" onSubmit={handleLogin}>
          <div className="mb-1 flex flex-col gap-6">
            <h1 className="font-bold -mb-3">
              Username
            </h1>
             <input
              placeholder="username"
              className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px] outline-none"
              name='username'
              onChange={(e) => {setUsernameLogin(e.target.value)}}
              />
            <h1 className="font-bold -mb-3">
              Password
            </h1>
              <input
                  type='password'
                  placeholder="********"
                  className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px] outline-none"
                  name='password'
                  autoComplete="on"
                  onChange={e => setPasswordLogin(e.target.value)}
                  
                />
              <button 
                className="mt-5 bg-[#3085d6] text-white w-full h-[50px] text-[20px] rounded"
                // onClick={handleLogin}
              >
                Login
              </button>
             
          </div>
        </form>
          <p >
                Need an account?
                <span>
                  <Link to="/signup" className='hover:underline font-semibold hover:text-[#3085d6]'>Signup</Link>
                </span>
          </p>
      </div>
    </div>
    <div>
        <h1>{loginReg}</h1>
    </div>
    </>
  )
}

