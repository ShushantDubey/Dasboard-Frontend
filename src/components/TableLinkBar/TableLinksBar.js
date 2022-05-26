import React from "react"; 
import { Link, useNavigate } from "react-router-dom";    
import "../TableLinkBar/TableLinkBar.scss";                             

function TableLinkBar() {
  return (
      
    <div className="table__bar">
      <div className="user__link">
            <Link className="link__text" to="">
                <span>User</span>
            </Link>
      </div>
      <div className="module__link">
            <Link className="link__text" to="">
                <span>Module</span>
            </Link>
      </div>
      <div className="date__link">
            <Link className="link__text" to="">
                <span>Date</span>
            </Link>
      </div>
      <div className="events__link">
            <Link className="link__text" to="">
                <span>Events</span>
            </Link>
      </div>
      <div className="score__link">
            <Link className="link__text" to="">
                <span>Score</span>
            </Link>
      </div>
      <div className="percent__link">
            <Link className="link__text" to="">
                <span>Percent</span>
            </Link>
      </div>
      <div className="status__link">
            <Link className="link__text" to="">
                <span>Status</span>
            </Link>
      </div>
      <div className="details__link">
            <Link className="link__text" to="">
                <span>Details</span>
            </Link>
      </div>
    </div>
  );
}

export default TableLinkBar;
