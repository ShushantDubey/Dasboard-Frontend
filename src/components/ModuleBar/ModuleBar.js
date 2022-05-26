import React from "react";
import InfoModuleBar from "../ModuleBar/InfoModuleBar.js";
import "../ModuleBar/ModuleBar.scss";

function ModuleBar() {
  
  return (
      <div className="info__module__bar">
        <div className="info__heading col-lg-2">
          <p>Active Modules</p>
        </div>
        <div className="info__module__wrapper col-lg-10">
          <InfoModuleBar moduleName="Confined Spaces" level="7"/>
          <InfoModuleBar moduleName="Fire Training" level="4"/>
          <InfoModuleBar moduleName="Cpr Training" level="6" />
        </div>
        <div className="col-lg-1 text-end">
          <p>arrow</p>
        </div>
      </div>
  );
}

export default ModuleBar;
