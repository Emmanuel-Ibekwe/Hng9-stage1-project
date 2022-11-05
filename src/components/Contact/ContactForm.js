import { useEffect, useReducer, useState } from "react";
import "./ContactForm.css";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";

const textAreaPlaceHolder =
  "Send me a message and I'll reply as soon as possible";
const name = "Immanuel";

const validateEmail = (email) => {
  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");

  if (
    !email.includes("@") ||
    atpos < 1 ||
    dotpos < atpos + 2 ||
    dotpos + 2 >= email.length
  ) {
    return false;
  } else {
    return true;
  }
};

const firstNameInputReducer = (state, action) => {
  if (action.type === "user entering input") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }

  if (action.type === "input blur") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }

  return { value: "", isValid: false };
};

const lastNameInputReducer = (state, action) => {
  if (action.type === "user entering input") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }

  if (action.type === "input blur") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }

  return { value: "", isValid: false };
};

const emailInputReducer = (state, action) => {
  if (action.type === "user entering input") {
    return {
      value: action.val,
      isValid: validateEmail(action.val),
    };
  }

  if (action.type === "input blur") {
    return {
      value: state.value,
      isValid: validateEmail(state.value),
    };
  }

  return { value: "", isValid: false };
};

const messageInputReducer = (state, action) => {
  if (action.type === "user entering input") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }

  if (action.type === "input blur") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }

  return { value: "", isValid: false };
};

const checkBoxInputReducer = (state, action) => {
  if (action.type === "checked") {
    return {
      isInvalid: false,
      isChecked: true,
    };
  }

  if (action.type === "unchecked") {
    return {
      isInvalid: false,
      isChecked: false,
    };
  }

  if (action.type === "invalid") {
    return {
      isInvalid: true,
      isChecked: false,
    };
  }

  if (action.type === "input blur") {
    return {
      isInvalid: state.isInvalid,
      isChecked: state.isChecked,
    };
  }

  return {
    isInvalid: false,
    isChecked: false,
  };
};

const inputIsTouchedReducer = (state, action) => {
  if (action.type === "first name input is touched") {
    return {
      firstNameInputIsTouched: true,
      lastNameInputIsTouched: state.lastNameInputIsTouched,
      emailInputIsTouched: state.emailInputIsTouched,
      messageInputIsTouched: state.messageInputIsTouched,
      checkBoxInputIsTouched: state.checkBoxInputIsTouched,
    };
  }

  if (action.type === "last name input is touched") {
    return {
      firstNameInputIsTouched: state.firstNameInputIsTouched,
      lastNameInputIsTouched: true,
      emailInputIsTouched: state.emailInputIsTouched,
      messageInputIsTouched: state.messageInputIsTouched,
      checkBoxInputIsTouched: state.checkBoxInputIsTouched,
    };
  }

  if (action.type === "emailInput is touched") {
    return {
      firstNameInputIsTouched: state.firstNameInputIsTouched,
      lastNameInputIsTouched: state.lastNameInputIsTouched,
      emailInputIsTouched: true,
      messageInputIsTouched: state.messageInputIsTouched,
      checkBoxInputIsTouched: state.checkBoxInputIsTouched,
    };
  }

  if (action.type === "messageInput is touched") {
    return {
      firstNameInputIsTouched: state.firstNameInputIsTouched,
      lastNameInputIsTouched: state.lastNameInputIsTouched,
      emailInputIsTouched: state.emailInputIsTouched,
      messageInputIsTouched: true,
      checkBoxInputIsTouched: state.checkBoxInputIsTouched,
    };
  }

  if (action.type === "checkbox is touched") {
    return {
      firstNameInputIsTouched: state.firstNameInputIsTouched,
      lastNameInputIsTouched: state.lastNameInputIsTouched,
      emailInputIsTouched: state.emailInputIsTouched,
      messageInputIsTouched: state.messageInputIsTouched,
      checkBoxInputIsTouched: true,
    };
  }

  if (action.type === "submit button is touched") {
    return {
      firstNameInputIsTouched: true,
      lastNameInputIsTouched: true,
      emailInputIsTouched: true,
      messageInputIsTouched: true,
      checkBoxInputIsTouched: true,
    };
  }
};

const ContactForm = (props) => {
  const [formIsValid, setformIsValid] = useState(true);
  const [displaySuccessMsg, setDisplaySuccessMsg] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (displaySuccessMsg) {
      navigate("/home");
    }
  }, [displaySuccessMsg, navigate]);

  const [firstNameInputState, dispatchFirstNameAction] = useReducer(
    firstNameInputReducer,
    {
      value: "",
      isValid: false,
    }
  );

  const [lastNameInputState, dispatchLastNameAction] = useReducer(
    lastNameInputReducer,
    {
      value: "",
      isValid: false,
    }
  );

  const [emailInputState, dispatchEmailAction] = useReducer(emailInputReducer, {
    value: "",
    isValid: false,
  });

  const [messageInputState, dispatchMessageAction] = useReducer(
    messageInputReducer,
    {
      value: "",
      isValid: false,
    }
  );

  const [checkBoxInputState, dispatchCheckBoxAction] = useReducer(
    checkBoxInputReducer,
    {
      isInvalid: false,
      isChecked: false,
    }
  );

  const [inputIsTouchedState, dispatchInputIsTouched] = useReducer(
    inputIsTouchedReducer,
    {
      firstNameInputIsTouched: false,
      lastNameInputIsTouched: false,
      emailInputIsTouched: false,
      messageInputIsTouched: false,
      checkBoxInputIsTouched: false,
    }
  );

  const firstNameChangeHandler = (event) => {
    dispatchInputIsTouched({ type: "first name input is touched" });
    dispatchFirstNameAction({
      type: "user entering input",
      val: event.target.value,
    });
  };

  const firstNameBlurHandler = () => {
    dispatchInputIsTouched({ type: "first name input is touched" });
    dispatchFirstNameAction({ type: "input blur" });
  };

  const lastNameChangeHandler = (event) => {
    dispatchInputIsTouched({ type: "last name input is touched" });
    dispatchLastNameAction({
      type: "user entering input",
      val: event.target.value,
    });
  };

  const lastNameBlurHandler = () => {
    dispatchInputIsTouched({ type: "last name input is touched" });
    dispatchLastNameAction({ type: "input blur" });
  };

  const emailInputChangeHandler = (event) => {
    dispatchInputIsTouched({ type: "emailInput is touched" });
    dispatchEmailAction({
      type: "user entering input",
      val: event.target.value,
    });
  };

  const emailInputBlurHandler = (event) => {
    dispatchInputIsTouched({ type: "emailInput is touched" });
    dispatchEmailAction({ type: "input blur" });
  };

  const messsageInputChangeHandler = (event) => {
    dispatchInputIsTouched({ type: "messageInput is touched" });
    dispatchMessageAction({
      type: "user entering input",
      val: event.target.value,
    });
  };

  const messageInputBlurHandler = () => {
    dispatchInputIsTouched({ type: "messageInput is touched" });
    dispatchMessageAction({ type: "input blur" });
  };

  const checkboxClickHandler = () => {
    dispatchInputIsTouched({ type: "checkbox is touched" });
    if (checkBoxInputState.isChecked) {
      dispatchCheckBoxAction({ type: "unchecked" });
    } else {
      dispatchCheckBoxAction({ type: "checked" });
    }
  };

  const firstNameIsInvalid =
    inputIsTouchedState.firstNameInputIsTouched && !firstNameInputState.isValid;
  const lastNameIsInvalid =
    inputIsTouchedState.lastNameInputIsTouched && !lastNameInputState.isValid;
  const emailIsInvalid =
    inputIsTouchedState.emailInputIsTouched && !emailInputState.isValid;
  const messageIsInvalid =
    inputIsTouchedState.messageInputIsTouched && !messageInputState.isValid;

  useEffect(() => {
    // scrolls to top once page loads
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // set the formIsValid state
    setformIsValid(
      !firstNameIsInvalid &&
        !lastNameIsInvalid &&
        !emailIsInvalid &&
        checkBoxInputState.isChecked &&
        !messageIsInvalid
    );
  }, [
    firstNameIsInvalid,
    lastNameIsInvalid,
    emailIsInvalid,
    checkBoxInputState.isChecked,
    messageIsInvalid,
  ]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log("success");
      setDisplaySuccessMsg(true);
      props.onPassDisplaySuccess(displaySuccessMsg);
      return;
    } else {
      console.log("failed");
      dispatchInputIsTouched({ type: "submit button is touched" });
      if (!checkBoxInputState.isChecked) {
        dispatchCheckBoxAction({ type: "invalid" });
      }
    }
  };

  // const emailIsInvalid =
  //   inputIsTouchedState.emailInputIsTouched && !emailInputState.isValid;
  // const checkboxIsInvalid = checkBoxInputState.isInvalid;
  // const messageIsInvalid =
  //   inputIsTouchedState.messageInputIsTouched && !messageInputState.isValid;

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={formSubmissionHandler}>
        <div className="first-section">
          <Input
            className="control-alt"
            type="text"
            id="first_name"
            label="First name"
            placeholder="Enter your first name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            inputIsInValid={firstNameIsInvalid}
          />

          <Input
            id="last_name"
            type="text"
            className="control-alt"
            label="Last name"
            placeholder="Enter your last name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            inputIsInValid={lastNameIsInvalid}
          />
        </div>

        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="yourname@email.com"
          hint="Your email must be in this format, 'yourname@email.com'"
          inputIsInValid={emailIsInvalid}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />

        <div className="message__div">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            className={`${messageIsInvalid ? "invalid" : ""}`}
            placeholder={textAreaPlaceHolder}
            onChange={messsageInputChangeHandler}
            onBlur={messageInputBlurHandler}
          ></textarea>
          {messageIsInvalid && <p>Please enter a message</p>}
        </div>

        <div className="checkbox--div">
          <input
            type="checkbox"
            id="checkbox"
            className={`${
              checkBoxInputState.isChecked ? "checkbox-checked" : ""
            } ${checkBoxInputState.isInvalid ? "checkbox-invalid" : ""}`}
            onClick={checkboxClickHandler}
          />
          <label htmlFor="checkbox">{`You agree to providing your data to ${name} who may contact you.`}</label>
        </div>

        <div className="actions">
          <button id="btn__submit" type="submit">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
