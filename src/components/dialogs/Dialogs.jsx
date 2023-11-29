import React from "react";
import { reduxForm, Field } from "redux-form";
import classes from "./dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";
import { Input } from "../common/formsControls/FormsControls";
import { requiredFields, maxLengthCreator } from "../../utils/validators";

const maxLength10 = maxLengthCreator(10);

const Dialogs = (props) => {
  const onSubmit = (values) => {
    console.log(values.message);
    props.addMessage(values.message)
  }

  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem key={el.id} name={el.name} id={el.id} avatar={el.avatar} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <MessageItem key={el.id} message={el.message} id={el.id} />
  ));

  return (
    <div className={classes.wrapper}>
      <ul>{dialogsElements}</ul>
      <div>
        {messagesElements}
        <DialogsReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const DialogsForm =(props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.newMessage}>
      <Field
        component={Input}        
        name='message'
        validate={[requiredFields, maxLength10]}
        className={classes.newMessageText}
        type='text'
        placeholder='your message...'
      />
      <button
        className={classes.messageBtn}
        type="submit"
      >
        Send
      </button>
    </form>
  )
}

const DialogsReduxForm = reduxForm({
  form: 'dialogs'
}) (DialogsForm)

export default Dialogs;
