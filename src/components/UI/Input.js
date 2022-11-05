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
        className={`${props.inputIsInValid ? "invalid" : ""}`}
      />
      {props.inputIsInValid && <p>{props.hint}</p>}
    </div>
  );
};

export default Input;
