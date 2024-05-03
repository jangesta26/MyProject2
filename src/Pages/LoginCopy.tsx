import { useState } from 'react';
import { login, logout } from '../Store';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const LoginCopy = () => {
    const [username, setUsername] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const dispatch = useDispatch();

    const user_name = useSelector((state: any) => state.user.value.username);


  return (
    <div  className="mt-10 ">
    <div className="mx-auto xl:w-[30%] bg-white shadow-lg px-[50px] py-8 rounded-[20px]" >
      <h2>Welcome {user_name}</h2>
      <h1 className="font-bold text-[26px]">
        Login here
        </h1>
        <h2 className="mt-6 font-light">
          Nice to meet you! Enter your details to login.
        </h2>
        <div className="mb-1 flex flex-col gap-6">
          <h1 className="font-bold -mb-3">
            Username
          </h1>
           <input
            placeholder="username"
            className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px] outline-none"
            name='username'
            onChange={(e) => {setUsername(e.target.value)}}
            />

          <h1 className="font-bold -mb-3">
              Password
            </h1>
              <input
                  type="password"
                  placeholder="********"
                  className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px] outline-none"
                  name='password'
                  onChange={e => setPasswordReg(e.target.value)}
                  
              />

            <button 
                className="mt-5 bg-[#3085d6] text-white hover:bg-rose-500 w-full h-[50px] text-[20px] rounded font-normal"
                onClick={() => dispatch(login ( { 
                  username: username,
                  password: passwordReg
                })
                )}>Login
            </button>

         <button 
            className=" bg-[#3085d6] text-white hover:bg-rose-500 w-full h-[50px] text-[20px] rounded font-normal"
            onClick={()=> dispatch(logout())}
            >
                Logout-btn
        </button>
           
        </div>
        <p >
              Need an account?
              <span>
                <a href="/signup" className='hover:underline font-semibold hover:text-[#3085d6]'>Signup</a>
              </span>
        </p>
    </div>
  </div>
  )
}

