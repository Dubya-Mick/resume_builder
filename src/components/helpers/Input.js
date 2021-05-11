import React from 'react';
import './input.css';

function Input(props) {
  const {
    onChange, name, placeholder, value,
  } = props;
  return (
    <div>
      <input
        className="input"
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default Input;
