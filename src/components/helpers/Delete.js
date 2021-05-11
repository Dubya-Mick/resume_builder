import React from 'react';
import './delete.css';

function Delete(props) {
  const { clickHandler, styleClass } = props;
  return (
    <i onClick={clickHandler} className={`material-icons ${styleClass}`}>delete_forever</i>
  );
}

export default Delete;
