import { useReducer } from "react";
import "./ContactForm.css";
import Input from "../UI/Input";

const textAreaPlaceHolder =
  "Send me a message and I'll reply as soon as possible";
const name = "Immanuel";

const inputIsTouchedReducer = (state, action) => {
  if (action.type === "emailInput is touched") {
    return {
      emailInputIsTouched: true,
      messageInputIsTouched: state.messageInputIsTouched,
      checkBoxInputIsTouched: state.checkBoxInputIsTouched,
    };
  }

  if (action.type === "messageInput is touched") {
    return {
      emailInputIsTouched: state.emailInputIsTouched,
      messageInputIsTouched: true,
      checkBoxInputIsTouched: state.checkBoxInputIsTouched,
    };
  }

  if (action.type === "checkbox is touched") {
    return {
      emailInputIsTouched: state.emailInputIsTouched,
      messageInputIsTouched: state.messageInputIsTouched,
      checkBoxInputIsTouched: true,
    };
  }

  if (action.type === "submit button is touched") {
    return {
      emailInputIsTouched: true,
      messageInputIsTouched: true,
      checkBoxInputIsTouched: true,
    };
  }
};

const ContactForm = () => {
  const [inputIsTouchedState, dispatchInputIsTouched] = useReducer(
    inputIsTouchedReducer,
    {
      emailInputIsTouched: false,
      messageInputIsTouched: false,
      checkBoxInputIsTouched: false,
    }
  );

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    dispatchInputIsTouched({ type: "submit button is touched" });
  };

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
          />

          <Input
            id="last_name"
            type="text"
            className="control-alt"
            label="Last name"
            placeholder="Enter your last name"
          />
        </div>

        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="yourname@email.com"
          hint="Email must contain '@'"
        />

        <div className="message__div">
          <label htmlFor="message"></label>
          <textarea id="message" placeholder={textAreaPlaceHolder}></textarea>
          {inputIsTouchedState.messageInputIsTouched && (
            <p>Please enter a message</p>
          )}
        </div>

        <div className="checkbox--div">
          <input type="checkbox" id="checkbox" />
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
