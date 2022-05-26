import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SideBar/SideBar.scss";

function Sidebar() {
  return (
      <div className="sidebar__container">
         <div className="sidebar__element">
            <p>ACCOUNT</p>
            <Link className="link__text" to="">
                <span><img src="../../images/Api.svg "/>API Access</span>
            </Link>
        </div>

        <div className="sidebar__element my-4">
            <p>ANALYTICS</p>
            <Link className="link__text" to="">
                <span><img src="../../images/Session.svg"/>Sessions</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><img src="../../images/System_Metrics.svg"/>System Metrics</span>
            </Link>
        </div>

        <div className="sidebar__element">
            <p>USER</p>
            <Link className="link__text" to="">
                <span><img src="../../images/User.svg"/>User</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><img src="../../images/Users.svg"/>Groups</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><img src="../../images/Users.svg"/>Groups List</span>
            </Link> <br/>
        </div>

        <div className="sidebar__element my-4">
            <p>ORGANIZATIONS</p>
            <Link className="link__text" to="">
                <span><img src="../../images/Building.svg"/>Organizations</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><img src="../../images/Building.svg"/>Affiliates</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><img src="../../images/Building.svg"/>Distributors</span>
            </Link> <br/>
        </div>

        <div className="sidebar__element">
            <p>ORGANIZATIONS</p>
            <Link className="link__text" to="">
                <span><img src="../../images/Module.svg"/>Module</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><img src="../../images/Version.svg"/>Version</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><img src="../../images/Download.svg"/>Download</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><img src="../../images/Upload.svg"/> Upload</span>
            </Link>
        </div>

      </div>
  );
}

export default Sidebar;