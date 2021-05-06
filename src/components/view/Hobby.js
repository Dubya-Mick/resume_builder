import React from 'react'

function Hobby(props) {
    const {hobby} = props;
    return (
        <span>
            {hobby.title}
        </span>
    )
}

export default Hobby
