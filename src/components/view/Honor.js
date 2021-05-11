import React from 'react';

function Honor(props) {
  const { honor } = props;
  return (
    <div>
      {`${honor.title} (${honor.year})`}
    </div>
  );
}

export default Honor;
