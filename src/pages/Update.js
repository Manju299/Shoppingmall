import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";

const Update=()=>
{  
    const {id} = useParams();
    const[post,setPost] = useState([]);
    useEffect(() =>{
      axios.get(`http://localhost:8081/Admin/${id}`).then((response)=>
        setPost(response.data));
      

      });

    const [uid,setId] =useState(post.id);
    const [uname,setName] = useState();
    const [upass,setPass] = useState("");
    const [umall,setMall] = useState("");
    const [uphone,setPhone] = useState("");
    // const handlePost = () =>{
    // const data ={
    //     id:uid,
    //     name:uname,
    //     password:upass,
    //     mall : umall,
    //     phone : uphone
    // }

    // axios.post('http://localhost:8081/Admin',data).then(response=>{console.log(response)})
    // .catch((err)=>console.log("error"))

    // }
    
    const update=(id,uname,upass,umall,uphone)=>{
        const data={
            id: id,
            name: uname,
            password: upass,
            mall: umall,
            phone : uphone
        }
        axios.put(`http://localhost:8081/Admin/${id}`,data).then(()=>{toast.success("updated")})
        .catch((err)=>console.log("error",err))


    }

    // const [admin,setAdmin] = useState({uid:'',uname:'',upass:'',umall:'',uphone:''} )
    // // const history = useHistory();
    // const {id} = useParams();
    
    // useEffect =async()=>{
    //    await axios.get(`http://localhost:8081/Admin/${id}`).then((response)=>
    //     setAdmin(response.data)).catch((err)=>console.log("Error",err));
    // }



    return(
        <>
        <div className='form'>
        <h1>Add new data</h1>
        
        <label htmlFor='id' >Enter the Id</label><br/>
        <input type="text" placeholder={post.id} onChange={(e)=>setId(e.target.value)}/> <br/>

         <label htmlFor='name' >Enter the name</label><br/>
         <input type="text" placeholder={post.name} onChange={(e)=>setName(e.target.value)}/> <br/>

        <label htmlFor='name' >Enter The password</label><br/>
        <input type="text" placeholder={post.password} onChange={(e)=>setPass(e.target.value)}/> <br/>

        <label htmlFor='name' >Enter The Mall</label><br/>
        <input type="text"placeholder={post.mall} onChange={(e)=>setMall(e.target.value)}/> <br/>

         <label htmlFor='name' >Enter The Phone</label><br/>
        <input type="text" placeholder={post.phone} onChange={(e)=>setPhone(e.target.value)}/> <br/>
        <button className="btn btn-success" onClick={()=>update(post.id,uname,upass,umall,uphone)}>Update</button>

        {/* <button className='btn btn-primary my-3' onClick={handlePost}>Add Data</button> */}
        </div>
        <ToastContainer/>
    
        </>
    )
 }
 export default Update;