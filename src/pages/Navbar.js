import React from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = () =>{
     return(
      <>
      <nav>
        <ul>
          {/* <li><Link to="/"><img src={logo} className="logo"></img></Link></li> */}
          <li><NavLink to="/" className='navi'  activeClassName="active"
          /*onMouseEnter={()=>{console.log("click");}} style={{background: "#04aa6d"}}*/>Home</NavLink></li> 
          <li><NavLink to="/Admin"  className='navi' activeClassName="active">Admin</NavLink></li>
          <li><NavLink to="/About"  className='navi'  activeClassName="active">About</NavLink></li>
          <li><NavLink to="/Project"  className='navi'  activeClassName="active">Project</NavLink></li>
          {/* <li><NavLink to="/Update"  className='navi'  activeClassName="active">Update</NavLink></li> */}

        </ul>
      </nav>
      
      
      </>
     
     )
    //  <><nav className="navbar navbar-expand-lg navbar-light bg-success">
  //   <div className="container-fluid">
  //     <Link className="navbar-brand" to="/" >
  //       Shopping Mall
  //     </Link>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon" />
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           <Link className="nav-link active" aria-current="page" to="/">
  //             Home
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="About">
  //             About
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="Admin">
  //             Admin
  //           </Link>
  //         </li>
  //       </ul>
        
        
  //     </div>
  //   </div>
  // </nav>
  
}
export default Navbar;