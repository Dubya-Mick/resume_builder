import React from 'react'

function Hobby(props) {
    const {hobby} = props;
    return (
        <div>
            {hobby.title}
        </div>
    )
}

export default Hobby
