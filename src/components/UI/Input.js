import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className={`control ${props.className}`}>
      <label>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.inputIsInValid && <p>{props.hint}</p>}
    </div>
  );
};

export default Input;
