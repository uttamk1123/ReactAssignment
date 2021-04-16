import React from "react";
import classes from "./Dropdown.module.css";
const Dropdown = (props) => {
  const items = props.items.map((ctrl) => (
    <option key={ctrl.value} value={ctrl.value}>
      {ctrl.name}
    </option>
  ));
  return (
    <div>
      <label className={classes.classes}>
        <select
          onChange={(event) => props.change(event)}
          onBlur={props.blur}
          value={props.value}
        >
          <option disabled value="">
            Select
          </option>
          {items}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
