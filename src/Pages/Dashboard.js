import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "././../firebase";
import Sidebar from "../components/SideBar/SideBar";
import AreaChart from "../components/AreaChart/AreaChart";
import DataCard from "../components/DataCard/DataCard";
import Dropdown from "../components/Dropdown/Dropdown";
import ModuleBar from "../components/ModuleBar/ModuleBar";
import AllSessionBar from "../components/AllSessionBar/AllSessionBar";
import EmployeeTable from "../components/EmployeesDetailedView/EmployeeDetails";
import TableLinkBar from "../components/TableLinkBar/TableLinksBar";
import "../scss/Dashboard.scss";
import axios from "axios";



function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  useEffect(() => {
    if (user) {
      const header = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      axios
        .post(
          "http://localhost:4000/api/users",
          {
            name: "",
            email: user.email,
          },
          {
            headers: header,
          }
        )
        .then((res) => {
          setName(res.data.name);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="dashboard__container d-flex">
      <div className="sidebar__wrapper">
        <Sidebar />
      </div>

      <div className="main__panel_wrapper">
        <div className="d-flex justify-content-between">
          <h1>Session Data</h1>
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </div>

        <div className="dropdown__wrapper">
          <Dropdown />
          <div className="separator"></div>
          <Dropdown />
        </div>

        <ModuleBar />
        <AreaChart />

        <div className="datacard__wrapper justify-content-between d-flex my-4">
          <DataCard label="Average Time" data="93:30" source="../../images/watch.svg"/>
          <DataCard label="Average Score" data="78%" source="../../images/percentage.svg"/>
          <DataCard label="Total Module" data="36" source="../../images/side.svg"/>
        </div>
        <AllSessionBar />
        <TableLinkBar />
        
      </div>
    </div>
  );
}
export default Dashboard;
