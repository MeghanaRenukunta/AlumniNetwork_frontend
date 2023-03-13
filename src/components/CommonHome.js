import React from "react";
import { useState, useEffect } from "react";
import kc from './pictures/kmit_campus1.jpg'
function CommonHome(){
    return (
        <div>
        <div className="kmit container" id="About">
            <p className="display-4">Keshav Memorial Institute of Technology</p>
    
                <p>KMIT, established in year 2007, is one of the premier engineering colleges in the state of Telangana. KMIT is sponsored by Keshav Memorial Education Society (KMES), well known in Hyderabad, for the past 75 years, for running various educational institutions of repute.</p>
                
                <p>KMIT is approved by All India Council for Technical Education (AICTE), New Delhi, and affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad and recognized by Govt. of Telangana.</p>
                
                <p>KMIT is co-promoted and powered by GENESIS SOLUTIONS PVT LTD, a premier and pioneer institute in Hyderabad imparting industry focused software training and education in emerging technologies and having tie-ups with leading MNCs.</p>
                
                <p>KMIT campus is located in Narayanaguda, a central place in the city of Hyderabad. The vision of the institution is to create 360 degree thinking engineers to cater to industry needs.</p>
        </div>
        <div className="container-fluid">
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
        </div>
        </div>
          );
}
export default CommonHome;







