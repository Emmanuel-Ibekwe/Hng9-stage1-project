import React from "react";

const FormContext = React.createContext({
  triggerDisplayMessage: () => {},
  untriggerDisplayMessage: () => {},
  displayMessage: false,
});

export default FormContext;
