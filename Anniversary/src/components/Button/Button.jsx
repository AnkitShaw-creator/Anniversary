import React from "react";
import "./Button.css";

export default function Button({ text, children="", variant='primary', onClick, className='', disabled }) {
  return (
    <button className={`button button-${variant} ${className}`} onClick={onClick} disabled={disabled}>
      {text}
      {children}
    </button>
  );
}