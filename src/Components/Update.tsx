import { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const Update = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
  
  
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() =>{
      if(id === ''){

        setUsername('');
        setEmail('');
        setStatus('');
      
      
    } else {

      Axios.get(`/create_account/`+id).then(res => {
        setUsername(res.data[0].username);
        setEmail(res.data[0].email);
        setStatus(res.data[0].status);
    }).catch(err => console.log(err))   
    }
    },[id])




    function handleUpdate(e:any){
      e.preventDefault();
      if(username !== '' && email !== '' && id !== ''){

        Axios.put(`/create_account/`+id, {username, email, status})
          .then(res => 

            Swal.fire({
              icon: "success",
              title: "Your work has been updated",
              showConfirmButton: false,
              timer: 1500
            })
          )
          navigate('/home/')

          

      } else {

        Swal.fire({
          title: "Invalid",
          text: "Please fill in the blank!",
          icon: "warning",
          confirmButtonColor:'#3085d6'
        })
            
      }
    }

    
      

  const dropOptions = [
    { 
      label: 'Active',
      value: 1
    },
    { 
      label: 'Suspended',
      value: 0
    },
  
  ];

  return (
    <div className="mx-auto xl:w-[40%] bg-white shadow-lg px-[50px] py-4 rounded-[20px]" >
    <h1 className="font-bold text-[26px]">
      Account details
    </h1>
    <form className="mt-4 mb-0 xl:w-[100%] max-w-screen-lg sm:w-[100%]" onSubmit={handleUpdate}>
      <div className="mb-1 flex flex-col gap-6">
        <h1 className="font-bold -mb-3">
          Username
        </h1>
        <input
          className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px] outline-none"
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
         <h1 className="font-bold -mb-3">
          Your Email
        </h1>
        <input
          className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px] outline-none"
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
         <h1 className="font-bold -mb-3">
          Status
        </h1>
         <select className="h-10 px-2 border-[1px] border-gray-500 rounded-[10px] outline-none"
          value={status}
          onChange={e => setStatus(e.target.value)}
          required>
            {
              dropOptions.map(options => (
                <option className='text-[16px] outline-none' value={options.value}>{options.label}</option>
              ))
            }
         </select>
      </div>
      <button className="mt-5 bg-gray-700 text-white w-full h-[50px] text-[20px] rounded">
        Save changes
      </button>
    </form>
  </div>
  )
}

