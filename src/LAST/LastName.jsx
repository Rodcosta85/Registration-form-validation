import React from "react";
import './LastName.css';
import IconError from '/images/icon-error.svg';

const LastNameInput = ({ value, lastChange, isEmpty }) => {
  const handleChange = (e) => {
    lastChange(e.target.value);
  }
  return (
    <>
      <div id={isEmpty ? 'ln-max' : 'ln-min'}>
        <input
          id={isEmpty ? 'last-name-red' : 'last-name-purple'}
          name="last"
          type="text"
          placeholder='Last Name'
          value={value}
          onChange={handleChange}
        />
        <div id={isEmpty ? 'l-img-p-show' : 'l-img-p-hide'}>
          <img
            id={isEmpty ? 'last-exclamation-show' : 'last-exclamation-hidden'}
            src={isEmpty ? IconError : 'none'}
            alt="red exclamation mark" />
          <p id={isEmpty ? 'show-last-p' : 'hide-last-p'}><i>Last Name cannot be empty</i></p>
        </div>
      </div>
    </>
  )
}

export default LastNameInput;