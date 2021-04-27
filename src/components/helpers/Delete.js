import React from 'react'

function Delete(props) {
    const {clickHandler} = props;
    return (
        <div>
            <button onClick={clickHandler}>Delete</button>
        </div>
    )
}

export default Delete
