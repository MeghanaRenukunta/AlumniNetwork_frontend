import React from "react";
function AdminLogin(){
    return (
    <div>
        <div className="cen container-lg">
        
        <p className="h4 pb-3 text-center">Please login to your account</p>
        <div className="me">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
        <div className="box container-lg ">
            <form action="/contact" methos="post">
                <div className=" ms-0" style={{textAlign:"left"}}>
                    <br/>
                    <label className="form-label" for="form2Example11">Username</label>
                    <div className="input-group mb-4">
                        <span className="input-group-text"><i className="fa fa-user"></i>
                        </span>
                        <input type="email" id="form2Example11" className="form-control"
                        placeholder="Email address" />
                    </div>
                </div>
                <div className=""  style={{textAlign:"left"}}>
                    <label className="form-label" for="form2Example22">Password</label>
                    <div className="input-group mb-4">
                        <span className="input-group-text"><i className="fa fa-lock"></i>
                        </span>
                        <input type="password" id="form2Example22" className="form-control" />
                    </div>
                </div>
                <div className="text-center pt-1 mb-1 pb-1">
                    
                <a className="btn btn-secondary btn-block mb-3" type="submit" href="AdminHome">Log in</a>
                    <br/>
                    <a className="text-muted" href="#!">Forgot password?</a>
                </div>
        
                <br/>
                <div className="d-flex align-items-center justify-content-center pb-4 pt-3">
                    <p className="mb-0 me-2 ms-5">Don't have an account?</p>
                    <a href="AdminRegister" className="btn">Register Now</a>
                </div>


            </form>
        </div>
        </div>
        <div className="col-2"></div>
        </div>
        </div>
        </div>
        </div>
      );
}
export default AdminLogin;
