import React from "react";
import home from'../Pic/Home.png'
import form from'../Pic/Form0.png'
import form1 from'../Pic/Form.png'



const Project=()=>{
    return(
        <>
        <div className="Center">
        <h1>ScreenShots</h1>
            <div className="cover">
                <div className="box">
            
                    <img src={home} className="img1"></img>
                    <h1>Home</h1>
                    <h6>
                    This is landing page of our website</h6>
                </div>
                <div className="box">
                    <img src={form} className="img1"></img>
                    <h1>Input Form</h1>
                    <h6>
                    This is Input page of our website</h6>
                </div>
                <div className="box">
                    <img src={form1}  className="img1"></img>
                    <h1>Display Data</h1>
                    <h6>
                    This is Data present in our website</h6>
                </div>
            </div>

        </div>
        </>
    )
}
export default Project;