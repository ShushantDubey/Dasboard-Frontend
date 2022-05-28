import React from "react";
import "../ModuleBar/InfoModuleBar.scss";
import Circularbar from "../ModuleBar/CircularProgressBar";

const InfoModuleBar = (props) => {

  return (
      <div className="info__module__wrapper me-5">

        <div className="info__headings">
          <p>{props.moduleName}</p>
          <p>Level {props.level}</p>
        </div>

        <div className="info__images">
        <Circularbar circularBar={props.circularBar} />
        </div>

      </div>
  );
};

export default InfoModuleBar;
