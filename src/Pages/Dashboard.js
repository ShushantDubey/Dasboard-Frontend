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

const list = [
  {
    SN: 1,
    Name: "John Roger",
    ID: 703875,
    ModComp: 18,
    TotalMod: 20,
    Passed: 17,
    AvgScore: "94%",
    AvgTime: "15:30 min",
  },
  {
    SN: 2,
    Name: "Smith Tao",
    ID: 749374,
    ModComp: 20,
    TotalMod: 20,
    Passed: 20,
    AvgScore: "100%",
    AvgTime: "26:30 min",
  },
  {
    SN: 3,
    Name: "Nicholas Green",
    ID: 749375,
    ModComp: 12,
    TotalMod: 20,
    Passed: 10,
    AvgScore: "83%",
    AvgTime: "17:27 min",
  },
  {
    SN: 4,
    Name: "Madaline Trut",
    ID: 730674,
    ModComp: 0,
    TotalMod: 20,
    Passed: 0,
    AvgScore: "0%",
    AvgTime: "20:39 min",
  },
  {
    SN: 5,
    Name: "Charlie Fox",
    ID: 740375,
    ModComp: 8,
    TotalMod: 20,
    Passed: 5,
    AvgScore: "63%",
    AvgTime: "36:40 min",
  },
];
const colNames = [
  "Sr. No.",
  "Employee ID",
  "ID",
  "Module Completed",
  "Total Module",
  "Passed",
  "Avg. Score",
  "Avg. Time",
];

const list2 = [
  {
    SN: 1,
    Name: "John Roger",
    ID: 703875,
    ModComp: 18,
    TotalMod: 20,
    Passed: 17,
    AvgScore: "94%",
    AvgTime: "15:30 min",
  },
  {
    SN: 2,
    Name: "Smith Tao",
    ID: 749374,
    ModComp: 20,
    TotalMod: 20,
    Passed: 20,
    AvgScore: "100%",
    AvgTime: "26:30 min",
  },
  {
    SN: 3,
    Name: "Nicholas Green",
    ID: 749375,
    ModComp: 12,
    TotalMod: 20,
    Passed: 10,
    AvgScore: "83%",
    AvgTime: "17:27 min",
  },
  {
    SN: 4,
    Name: "Madaline Trut",
    ID: 730674,
    ModComp: 0,
    TotalMod: 20,
    Passed: 0,
    AvgScore: "0%",
    AvgTime: "20:39 min",
  },
  {
    SN: 5,
    Name: "Charlie Fox",
    ID: 740375,
    ModComp: 8,
    TotalMod: 20,
    Passed: 5,
    AvgScore: "63%",
    AvgTime: "36:40 min",
  },
];

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
          <Dropdown />
        </div>

        <ModuleBar />
        <Dropdown />
        <AreaChart />

        <div className="datacard__wrapper justify-content-between d-flex my-4">
          <DataCard label="Average Time" data="93:30" />
          <DataCard label="Average Score" data="78%" />
          <DataCard label="Total Module" data="36" />
        </div>

        <AllSessionBar />
        <TableLinkBar />
        {/* <EmployeeTable list={list} colNames={colNames} /> */}
        
      </div>
    </div>
  );
}
export default Dashboard;
