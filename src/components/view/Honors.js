import React from 'react';
import Honor from './Honor';

function Honors(props) {
  const { honors } = props;

  const honorList = honors.map((honor) => (
    <div key={honor.id}>
      <Honor honor={honor} />
    </div>
  ));

  if (honorList.length > 0) {
    return (
      <div>
        <div className="title">Honors</div>
        <hr />
        {honorList}
      </div>
    );
  }
  return null;
}

export default Honors;
