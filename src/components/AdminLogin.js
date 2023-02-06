import React from "react";
import km from './pictures/kmit-bar.png';
function AdminLogin(){
    return (
    <div>
        <div className="cen container-lg">
        
        <p className="h4 pb-3 text-center">Please login to your account</p>
        <div className="me">
        <div className="box container-lg ">
            <form action="/contact" method="post">
                <div className="lc">
                <div className=" ms-0" style={{textAlign:"left"}}>
                    <br/>
                    <label className="form-label" for="form2Example11">Username</label>
                    <div className="input-group mb-4">
                        <span className="input-group-text"><i className="fa fa-user"></i>
                        </span>
                        <input type="email" id="form2Example11" name="email" className="form-control"
                        placeholder="Email address" />
                    </div>
                </div>
                <div className=""  style={{textAlign:"left"}}>
                    <label className="form-label" for="form2Example22">Password</label>
                    <div className="input-group mb-4">
                        <span className="input-group-text"><i className="fa fa-lock"></i>
                        </span>
                        <input type="password" id="form2Example22" name="password" className="form-control" />
                    </div>
                </div>
                </div>
                <div className="text-center pt-1 mb-1 pb-1">
                    
                    <a className="btn btn-secondary btn-block mb-3" type="submit" href="AlumniHome">Log in</a>
                    {/* <button type="submit" value="AlumniHome" className="btn btn-secondary btn-block mb-3" >LogIn</button> */}
                    <br/>
                    <a className="text-muted" href="#!">Forgot password?</a>
                </div>
        
                <br/>
                


            </form>
        </div>
        </div>
        <div className="d-flex align-items-center justify-content-center pb-4 pt-3">
            <p className="mb-0 me-2 ms-5">Don't have an account?</p>
            <a href="AlumniRegister" className="btn">Register Now</a>
        </div>
        </div>
        </div>
      );
}
export default AdminLogin;
