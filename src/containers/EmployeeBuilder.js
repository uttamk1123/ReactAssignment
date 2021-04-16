import React, { Component } from "react";
import EmployeeForm from "../components/Form/EmployeeForm";

import GridSetting from "../components/GridSetting/GridSetting";
import DataGrid from "../components/DataGrid/DataGrid";
const cols = [
  { title: "EmployeeId", field: "EmployeeId" },
  { title: "Name", field: "EmployeeName" },
  { title: "Salary", field: "Salary" },
  { title: "Dept", field: "Dept" },
  { title: "Designation", field: "Designation" },
];
export class EmployeeBuilder extends Component {
  state = {
    employee: [],
    canDelete: false,
    sortBy: "",
    pageSize: 5,
  };
  addEmployeeHandler = (empVM) => {
    let empRef = [];
    empRef = [...this.state.employee];
    empRef.push(empVM);

    this.setState({ employee: empRef });
  };

  rowDeleteHandler = (empIndex) => {
    const employeeRef = [...this.state.employee];
    employeeRef.splice(empIndex, 1);
    this.setState({ employee: employeeRef });
  };
  canDeleteHandler = (event) => {
    this.setState({ canDelete: event.target.checked });
  };
  sortHandler = (event) => {
    this.setState({ sortBy: event.currentTarget.value });
  };
  pageDataHandler = (event) => {
    // console.log(event.currentTarget.value);

    const employeeRef = [...this.state.employee];

    this.setState({
      employee: employeeRef,
      pageSize: event.currentTarget.value,
    });
  };
  render() {
    return (
      <div>
        <EmployeeForm addEmployee={this.addEmployeeHandler} />
        <br />
        <GridSetting
          canDelete={this.state.canDelete}
          canDeleteHandler={this.canDeleteHandler}
          sortdata={this.sortHandler}
          pagingSize={this.pageDataHandler}
        />
        <br />

        <DataGrid
          datasource={this.state.employee}
          canDelete={this.state.canDelete}
          rowDelete={this.rowDeleteHandler}
          cols={cols}
          sortKey={this.state.sortBy}
          PageSize={this.state.pageSize}
        />
      </div>
    );
  }
}

export default EmployeeBuilder;
