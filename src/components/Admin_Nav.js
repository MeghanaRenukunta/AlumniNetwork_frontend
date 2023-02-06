import React from "react";
function Admin_Nav(){
    return (
       
<div>
<div class="my1 container-fluid">
        <nav class="navbar navbar-expand-lg position:fixed sticky-sm-top justify-content-end" >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="mynav">
                <ul class="navbar-nav ms-auto"> 
                    <li class="nav-item">
                    <a class="nav-link" href="AdminHome">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="AdminAbout">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="AdminVerify">Verify</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="AdminSearch">Directory</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="AdminEvents">Events</a>
                    </li>                
                    <li class="nav-item">
                        <a class="nav-link me-5" href="#Contact">Contact</a>
                    </li>
                    <form class="d-flex" >
                        <input class="form-control me-2" type="search" style={{width:"200px", placeholder:"Search", ariaLabel:"Search"}}/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                    <a href="Home" className="btn" id="logout">LogOut</a>
                </ul>
            </div>
        </nav>
        </div>
</div>

    );
}
export default Admin_Nav;



