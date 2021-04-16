import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import ValidationHook from "../../Validator/ValidationHooks";

const DeptName = [
  {
    name: "HR",
    value: "HR",
  },
  {
    name: "Development",
    value: "Development",
  },
  {
    name: "Accounts",
    value: "Accounts",
  },
  {
    name: "IT services",
    value: "IT services",
  },
];
const Designation = [
  {
    name: "Manager",
    value: "Manager",
  },
  {
    name: "Lead",
    value: "Lead",
  },

  {
    name: "Admin",
    value: "Admin",
  },

  {
    name: "Developer",
    value: "Developer",
  },

  {
    name: "QA",
    value: "QA",
  },
];

const isNotEmpty = (value) => value.trim() !== "";

const EmployeeForm = (props) => {
  let isFormValid = false;
  const {
    value: employeeIDValue,
    hasError: employeeIdHasError,
    valueChangedHandler: employeeIdChangedHandler,
    inputBluredHandler: employeeIdBluredHandler,
    isValid: employeeIdIsValid,
    reset: resetEmployeeId,
    isPositive: positiveId,
  } = ValidationHook(isNotEmpty, true);

  const {
    value: employeeNameValue,
    hasError: employeeNameHasError,
    valueChangedHandler: employeeNameChangedHandler,
    inputBluredHandler: employeeNameBluredHandler,
    isValid: employeeNameIsValid,
    reset: resetEmployeeName,
  } = ValidationHook(isNotEmpty);

  const {
    value: DesignationValue,
    hasError: DesignationHasError,
    valueChangedHandler: DesignationChangedHandler,
    inputBluredHandler: DesignationBluredHandler,
    isValid: DesignationIsValid,
    reset: resetDesignation,
  } = ValidationHook(isNotEmpty);

  const {
    value: DeptValue,
    hasError: DeptHasError,
    valueChangedHandler: DeptChangedHandler,
    inputBluredHandler: DeptBluredHandler,
    reset: resetDept,
  } = ValidationHook(isNotEmpty);
  const {
    value: SalaryValue,
    hasError: SalaryHasError,
    valueChangedHandler: SalaryChangedHandler,
    inputBluredHandler: SalaryBluredHandler,
    isValid: SalaryIsValid,
    reset: resetSalary,
    isPositive: positiveSalary,
  } = ValidationHook(isNotEmpty, true);

  if (
    employeeIdIsValid &&
    employeeNameIsValid &&
    SalaryIsValid &&
    DesignationIsValid
  ) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }

    const newEmployee = {
      EmployeeId: employeeIDValue,
      EmployeeName: employeeNameValue,
      Salary: SalaryValue,
      Designation: DesignationValue,
      Dept: DeptValue,
      id: Math.round(Math.random() * (100 - 1)),
    };
    resetEmployeeId();
    resetEmployeeName();
    resetSalary();
    resetDesignation();
    resetDept();
    props.addEmployee(newEmployee);
  };
  const employeeIdClasses =
    employeeIdHasError || !positiveId ? "form-control invalid" : "form-control";
  const employeeNameClasses = employeeNameHasError
    ? "form-control invalid"
    : "form-control";

  const SalaryClasses =
    SalaryHasError || !positiveSalary ? "form-control invalid" : "form-control";
  const DesignationClasses = DesignationHasError
    ? "form-control invalid"
    : "form-control";
  const DeptClasses = DeptHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={employeeIdClasses}>
          <label htmlFor="EmployeeId">Employee Id</label>
          <input
            type="text"
            id="EmployeeId"
            onChange={employeeIdChangedHandler}
            onBlur={employeeIdBluredHandler}
            value={employeeIDValue}
          />
        </div>
        <div className={employeeNameClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={employeeNameChangedHandler}
            onBlur={employeeNameBluredHandler}
            value={employeeNameValue}
            required
          />
        </div>
      </div>
      <div className="control-group">
        <div className={SalaryClasses}>
          <label htmlFor="Salary">Salary</label>
          <input
            type="text"
            id="Salary"
            onChange={SalaryChangedHandler}
            onBlur={SalaryBluredHandler}
            value={SalaryValue}
          />
        </div>
        <div className={DeptClasses}>
          <label htmlFor="name">Dept Name</label>
          <Dropdown
            items={DeptName}
            change={DeptChangedHandler}
            blur={DeptBluredHandler}
            value={DeptValue}
          />
        </div>
      </div>
      <div className="control-group">
        <div className={DesignationClasses}>
          <label htmlFor="name">Designation</label>
          <Dropdown
            items={Designation}
            change={DesignationChangedHandler}
            blur={DesignationBluredHandler}
            value={DesignationValue}
          />
        </div>
      </div>
      <div className="control-group">
        <div className="form-control invalid">
          {employeeIdHasError && (
            <p className="error-text">Please enter Employee Id</p>
          )}
          {!positiveId && (
            <p className="error-text">
              Please enter positive number only in Employee Id
            </p>
          )}
          {employeeNameHasError && (
            <p className="error-text">Please enter Employee Name</p>
          )}
          {!positiveSalary && (
            <p className="error-text">
              Please enter positive number only in Salary
            </p>
          )}
          {SalaryHasError && <p className="error-text">Please enter Salary</p>}
          {DeptHasError && (
            <p className="error-text">Please select Department</p>
          )}
          {DesignationHasError && (
            <p className="error-text">Please select Designation</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
