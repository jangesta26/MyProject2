import { useState, useEffect } from 'react';
import Axios from 'axios';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Update } from './Update';
import { encrypted } from '../Crypto';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export const Pagination = () => {

const navigate = useNavigate();

function submitAlert(id){
    if(id !== ''){
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, edit it!",
            cancelButtonText: "No, cancel!",
          }).then((result) => { 
            if(result.isConfirmed){
                navigate('/tables/'+id);
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel 
            ){
                navigate('/tables/');
            }
          });
    }
}

// delete
function handleDelete(id){
    navigate('/tables/'+id);
    const conf = window.confirm("Do you want to delete?")
    if(conf){
        Axios.delete('/create_account/'+id)
        .then(res => {
            alert('record has deleted!');
            window.location.reload();
        }).catch(err => console.log(err));
    }
}



const TABLE_HEAD = [
    {
        name:"id",
        label:"NO.",
        options:{
            customBodyRender: (value) =>       
                     
            <p>{value}</p>         
               
        }
    },
    {
        name:"username",
        label:"username",
    },
    {
        name:"email",
        label:"email",
        options:{
            customBodyRender: (value) =>
                <a href='#something' className='px-3 py-1 bg-blue-500 inline-block rounded-full'>{value}</a>
        }
    },
    {
        name:"password",
        label:"password",
        options: {
            customBodyRender:(value) =>
            <p>{encrypted(value)}</p>
       },
    },
    {
        name:"status",
        options:{
            customBodyRender: (value) =>
                <p className={`capitalize px-3 py-1 inline-block rounded-full
                ${ value === 1 ? 'bg-green-500' :'bg-rose-500' }
                `}>{ value === 1 ? value="Active" : "Suspended"} 
                </p>
        }
    },
    {
        name:"id",
        label:"action",
        options:{
            customBodyRender: (value) =>
                <div className='flex gap-[4px]'>  
                    <button className='capitalize px-3 py-1 inline-block rounded-md bg-yellow-800 text-white' onClick={e => submitAlert(value)}>Edit</button>
                    <button className='capitalize px-3 py-1 inline-block rounded-md bg-red-900 text-white' onClick={e => handleDelete(value)}>Delete</button>
                </div>
        }
    },
];


// display on table
    const [records, setRecords] = useState([]);

    useEffect(() => {
        Axios.get("/create_account").then((res) => {
            console.log(res.data)
            setRecords(res.data)
        })

        .catch((err) => console.log(err));
    }, []);

// table behavior
    const options = {
        filter: false,
        selectableRows:false,
        elevation: 0,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20, 30, 50, 100],
    };

    const getMuiTheme = () => createTheme({
        palette: {
            background: {
                paper: "#1e293b",
                default: "#0f172a",
            },
            mode: "dark",
        },

        components: {
            MuiTableCell: {
                styleOverrides:{
                    head: {
                        padding: "10px 0px",
                    },
                    body:{
                        padding: "10px 15px",
                        color: "#e2e8f0",
                    },

                },
            },
        },
    });
  return (
    <>
        <div className=" flex w-full text-sm text-left rtl:text-right dark:text-gray-400 mt-6 gap-4 px-8">
            <div className=' xl:w-10/12 xl:max-w-4xl mx-auto shadow-lg'>
                <ThemeProvider theme={getMuiTheme}>
                    <MUIDataTable
                    title={"Account List"}
                    data={records}
                    columns={TABLE_HEAD}
                    options={options}
                    className="px-6"
                    />
                </ThemeProvider>
        </div>
        <Update/>
      </div>

    </>
  )
}
