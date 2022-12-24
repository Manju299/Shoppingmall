import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
// import Update from './Update';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';

const Admin=({post}) =>{
    const [uid,setId] =useState("");
    const [uname,setName] = useState("");
    const [upass,setPass] = useState("");
    const [umall,setMall] = useState("");
    const [uphone,setPhone] = useState("");
    const handlePost = () =>{
    const data ={
        id:uid,
        name:uname,
        password:upass,
        mall : umall,
        phone : uphone
    }

    axios.post('http://localhost:8081/Admin',data).then(()=>{toast.success("Successful")})
    .catch((err)=>toast.warning('Invalid Data'))

    }

    const resetForm = () => {
     
        setId("")
        setName("")
        setMall("")
        setPass("")
        setPhone("")
    }

    const onDelete = (id) =>{
        axios.delete(`http://localhost:8081/Admin/${id}`)
        .then(()=>{toast.success("Delete succesfull")})
        .catch((err)=>toast.warning("Deleted failed"))
    }

    // const update=(id,uname,upass,umall,uphone)=>{
    //     const data={
    //         id: id,
    //         name: uname,
    //         password: upass,
    //         mall: umall,
    //         phone : uphone
    //     }
    //     axios.put(`http://localhost:8081/Admin/${id}`,data)
    //     .catch((err)=>console.log("error",err))
    //     // window.location.reload();
    // }

//    const update=(id)=>{
//     console.log(id);
//     post.history.push("/Update/"+id)
//    }

    

    return(
    <>
    <div className='form'>
        <h1>Add new data</h1>

        <label htmlFor='name' >Enter the Id</label><br/>
        <input type="text" value = {uid} onChange={(e)=>setId(e.target.value)}/> <br/>

        <label htmlFor='name' >Enter the name</label><br/>
        <input type="text" value = {uname} onChange={(e)=>setName(e.target.value)}/> <br/>

        <label htmlFor='name' >Enter The password</label><br/>
        <input type="text" value = {upass} onChange={(e)=>setPass(e.target.value)} /> <br/>

        <label htmlFor='name' >Enter The Mall</label><br/>
        <input type="text" value = {umall} onChange={(e)=>setMall(e.target.value)}/> <br/>

        <label htmlFor='name' >Enter The Phone</label><br/>
        <input type="text" value = {uphone} onChange={(e)=>setPhone(e.target.value)}/> <br/>

        <button className='btn btn-primary my-3' onClick={handlePost}>Add Data</button>
        <input type="button"  value="Reset" className='btn btn-primary my-3 mx-2' onClick={()=>resetForm()}></input>


    
    </div >

    <div className='Data'>
        <table className='table table-striped table-hover'>
        <tbody>
            
                <th>Id</th>
                <th>AdminName</th>
                <th>password</th>
                <th>MallName</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
            
                {post && post.map((Post)=>(
                    <tr>
                        <td>{Post.id}</td>
                        <td>{Post.name}</td>
                        <td>{Post.password}</td>
                        <td>{Post.mall}</td>
                        <td>{Post.phone}</td>
                        <td>
                            {/* < trigger={<button className="btn btn-success">Update</button>} position="right top">
                            <h3>Update</h3>
                            <label htmlFor='id' >Enter the Id</label><br/>
                            <input type="text" placeholder={Post.id} onChange={(e)=>setId(e.target.value)}/> <br/>

                            <label htmlFor='name' >Enter the name</label><br/>
                            <input type="text" placeholder={Post.name} onChange={(e)=>setName(e.target.value)}/> <br/>

                             <label htmlFor='name' >Enter The password</label><br/>
                            <input type="text" placeholder={Post.password} onChange={(e)=>setPass(e.target.value)}/> <br/>

                            <label htmlFor='name' >Enter The Mall</label><br/>
                            <input type="text"placeholder={Post.mall} onChange={(e)=>setMall(e.target.value)}/> <br/>

                            <label htmlFor='name' >Enter The Phone</label><br/>
                            <input type="text" placeholder={Post.phone} onChange={(e)=>setPhone(e.target.value)}/> <br/>
                            <button className="btn btn-success" onClick={()=>update(Post.id,uname,upass,umall,uphone)}>Update</button>


         */}
                            <Link className='btn btn-success' to={`/Update/${Post.id}`}>Update</Link>
                            
                        </td>
                        <td><button className='btn btn-danger' onClick={()=>onDelete(Post.id)}>Delete</button></td>
                    </tr>



                ))}
                </tbody>

        </table>
    </div>


    <ToastContainer/>
    
    </>
    )
}

export default Admin;
