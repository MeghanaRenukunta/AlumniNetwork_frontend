import React from "react";
import { useState, useEffect } from "react";
import kc from './pictures/kmit_campus1.jpg'
import am from './pictures/alumni.jpeg'
function AlumniHome(){
    return (
    <div>
        <div className="row">
            <div className="col-3">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="card" style={{borderRadius: "15px"}}>
                            <div className="card-body text-center">
                                <div className="mt-3 mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    className="rounded-circle img-fluid" style={{width: "100px"}} />
                                </div>
                                <h4 className="mb-2"> {localStorage.getItem('user_fn')} {localStorage.getItem('user_ln')}</h4>
                                <p className="text-muted mb-2">@Programmer <span className="mx-2"></span></p>
                                <p className="text-muted mb-4"> {localStorage.getItem('user_em')} <span className="mx-2"></span></p>
                                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                <div>
                                    <p className="mb-2 h5">Branch</p>
                                    <p className="text-muted mb-0">CSE</p>
                                </div>
                                <div className="px-1">
                                    <p className="mb-2 h5">Course</p>
                                    <p className="text-muted mb-0">BTECH</p>
                                </div>
                                </div>
                                <div>
                                    <p className="mb-2 h5">YearOfGraduation</p>
                                    <p className="text-muted mb-0">2020</p>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
            {/* </section> */}
            </div>
       <div className="col-9"> 
       <img src={am} className="img-fluid center my-5" height={80}></img>
        <div className="kmit1 container" id="Aboutk">
        {/* <p className="display-4">Keshav Memorial Institute of Technology</p> */}

            <p>KMIT, established in year 2007, is one of the premier engineering colleges in the state of Telangana. KMIT is sponsored by Keshav Memorial Education Society (KMES), well known in Hyderabad, for the past 75 years, for running various educational institutions of repute.</p>
            
            <p>KMIT is approved by All India Council for Technical Education (AICTE), New Delhi, and affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad and recognized by Govt. of Telangana.</p>
            
            <p>KMIT is co-promoted and powered by GENESIS SOLUTIONS PVT LTD, a premier and pioneer institute in Hyderabad imparting industry focused software training and education in emerging technologies and having tie-ups with leading MNCs.</p>
            
            <p>KMIT campus is located in Narayanaguda, a central place in the city of Hyderabad. The vision of the institution is to create 360 degree thinking engineers to cater to industry needs.</p>
    </div>
    {/* <div className="container-fluid">
        <div className="row">
            <div className="col">
                <img src={kc} alt="" className="img-fluid"/>
            </div>
            <div className="col">
                <img src={kc} alt="" className="img-fluid"/>
            </div>
            <div className="col">
                <img src={kc} alt="" className="img-fluid"/>
            </div>
        </div>
    </div> */}
    </div>
    </div>
    </div>
      );
}
export default AlumniHome;







