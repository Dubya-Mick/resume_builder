import React from 'react'
import './delete.css'

function Delete(props) {
    const {clickHandler} = props;
    return (
        <div>
            <button onClick={clickHandler} className="delete">Delete</button>
        </div>
    )
}

export default Delete
