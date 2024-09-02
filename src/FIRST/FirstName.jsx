import React from "react";
import './FirstName.css';
import IconError from '/images/icon-error.svg';

const FirstNameInput = ({ value, firstChange, isEmpty }) => {
  const handleChange = (e) => {
    firstChange(e.target.value);
  }

  return (
    <>
      <div id={isEmpty ? 'fn-max' : 'fn-min'}>
        <input
          id={isEmpty ? 'first-name-red' : 'first-name-purple'}
          name="first"
          type="text"
          placeholder='First Name'
          value={value}
          onChange={handleChange}
        />
        <div id={isEmpty ? 'f-img-p-show': 'f-img-p-hide'}>
          <img
            id={isEmpty ? 'first-exclamation-show' : 'first-exclamation-hidden'}
            src={isEmpty ? IconError : 'none'}
            alt="red exclamation mark" />
          <p id={isEmpty ? 'show-first-p' : 'hide-first-p'}><i>First Name cannot be empty</i></p>
        </div>
      </div>
    </>
  )
}

export default FirstNameInput;