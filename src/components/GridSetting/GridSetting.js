import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import classes from "./GridSetting.module.css";
const sortColumn = [
  {
    name: "EmployeeId",
    value: "EmployeeId",
  },
  {
    name: "EmployeeName",
    value: "EmployeeName",
  },
  {
    name: "Salary",
    value: "Salary",
  },
  {
    name: "Designation",
    value: "Designation",
  },
  {
    name: "Department",
    value: "Dept",
  },
];

const pageSize = [
  {
    name: "5",
    value: 5,
  },
  {
    name: "10",
    value: 10,
  },
  {
    name: "15",
    value: 15,
  },
  {
    name: "20",
    value: 20,
  },
];
const GridSetting = (props) => {
  return (
    <div>
      <div className="control-group">
        <div className="form-control" style={{ marginTop: "4%" }}>
          <label className={classes.containercheckbox}>
            Show Delete
            <input
              type="checkbox"
              id="del"
              onChange={(event) => props.canDeleteHandler(event)}
            />
            <span className={classes.checkmark}></span>
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="del">Sort By</label>

          <Dropdown items={sortColumn} change={props.sortdata}></Dropdown>
        </div>
        <div className="form-control">
          <label htmlFor="del">Page Size</label>

          <Dropdown items={pageSize} change={props.pagingSize}></Dropdown>
        </div>
      </div>
    </div>
  );
};

export default GridSetting;
