import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Signup = () => {


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(1);
  const navigate = useNavigate();


  function submitForm (event:any){
    event.preventDefault();
    if(username === '' && email === '' && password === ''){
      Swal.fire({
        title: "Invalid",
        text: "Please check all the inputs is correct!",
        icon: "warning",
        confirmButtonColor:'#3085d6'
      })
    } else {

      axios.post('/create_account', {
        username,
        email,
        password,
        status
      })

      Swal.fire({
        title:'Completed',
        text: "Create account succeded!",
        icon:'success',
        confirmButtonColor:'#3085d6'
      })

      .then(res => {
        console.log(res);
        navigate('/tables');
      }).catch(err => console.log(err));
    }

  }
 
  return (
      <div className="mt-10 ">
          <div className="mx-auto xl:w-[50%] bg-white shadow-lg px-[50px] py-8 rounded-[20px]" >
            <h1 className="font-bold text-[26px]">
              Sign Up
            </h1>
            <h2 className="mt-6 font-light">
              Nice to meet you! Enter your details to register.
            </h2>
            <form className="mt-8 mb-2 xl:w-[100%] max-w-screen-lg sm:w-[100%]" onSubmit={submitForm}>
              <div className="mb-1 flex flex-col gap-6">
                <h1 className="font-bold -mb-3">
                  Username
                </h1>
                <input
                  placeholder="johndoe"
                  className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px]"
                  name='username'
                  onChange={e => setUsername(e.target.value)}
                  required
                />
                 <h1 className="font-bold -mb-3">
                  Your Email
                </h1>
                <input
                  placeholder="name@mail.com"
                  className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px]"
                  name='email'
                  onChange={e => setEmail(e.target.value)}
                  required
            
                />
               <h1 className="font-bold -mb-3">
                  Password
                </h1>
                <input
                  type="password"
                  placeholder="********"
                  className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px]"
                  name='password'
                  onChange={e => setPassword(e.target.value)}
                  required
                  
                />
                <input 
                  type="text" className="hidden" 
                  name='status' 
                  onChange={e => setStatus(1)} 
                 />
              </div>
              <button className="mt-5 bg-gray-700 text-white w-full h-[50px] text-[20px] rounded">
                Sign Up
              </button>
              <h1 className="mt-4 text-center font-normal text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-gray-900">
                  Sign In
                </a>
              </h1>
            </form>
          </div>
      </div>
  )
}

