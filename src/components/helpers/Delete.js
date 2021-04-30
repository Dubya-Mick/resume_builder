import React from 'react'
import './delete.css'

function Delete(props) {
    const {clickHandler, content} = props;
    return (
        <div>
            <button onClick={clickHandler} className="delete">{content}</button>
        </div>
    )
}

export default Delete
