import React from "react";

const FormContext = React.createContext({
  setDisplayMessage: (val) => {},
  displayMessage: false,
});

export default FormContext;
