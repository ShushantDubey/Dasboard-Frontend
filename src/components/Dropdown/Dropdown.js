import React from 'react';
import "../Dropdown/Dropdown.scss";

function Sessions (props) {
  return (
    <div className= "dropdown__wrapper">
        <select className="dropdown">
          <option value="Session">Average Session</option>
          <option value="Session2">Session2</option>
          <option value="Session3">Session3</option>
        </select>
    </div>
  );
};

export default Sessions;