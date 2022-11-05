import { useState } from "react";
import FormContext from "./form-context";

const FormProvider = (props) => {
  const [display, setDisplay] = useState(false);
  const setTriggerDisplayMessage = () => {
    setDisplay(true);
  };

  const setUntriggerDisplayMessage = () => {
    setDisplay(false);
  };

  const FormContxt = {
    triggerDisplayMessage: setTriggerDisplayMessage,
    untriggerDisplayMessage: setUntriggerDisplayMessage,
    displayMessage: display,
  };

  return (
    <FormContext.Provider value={FormContxt}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
