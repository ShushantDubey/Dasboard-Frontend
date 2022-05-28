import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../SideBar/SideBar.scss";

function Sidebar() {
  return (
      <div className="sidebar__container">
         <div className="sidebar__element">
            <p>ACCOUNT</p>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-server"></i>API Access</span>
            </Link>
        </div>

        <div className="sidebar__element">
            <p>ANALYTICS</p>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-chart-column"></i>Sessions</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-database"></i>System Metrics</span>
            </Link>
        </div>

        <div className="sidebar__element">
            <p>USER</p>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-user"></i>User</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-users"></i>Groups</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-users"></i>Groups List</span>
            </Link> <br/>
        </div>

        <div className="sidebar__element">
            <p>ORGANIZATIONS</p>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-building"></i>Organizations</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-building"></i>Affiliates</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-building"></i>Distributors</span>
            </Link> <br/>
        </div>

        <div className="sidebar__element">
            <p>ORGANIZATIONS</p>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-folder"></i>Module</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-file"></i>Version</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-download"></i>Download</span>
            </Link> <br/>
            <Link className="link__text" to="">
                <span><i class="fa-solid fa-upload"></i> Upload</span>
            </Link>
        </div>

      </div>
  );
}

export default Sidebar;