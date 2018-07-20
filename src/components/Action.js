import React from 'react';


const Action = (props) => (

    <div>
    <button className = 'big-button'
    onClick = {props.handlePick}
    disabled = {!props.hasOptions}> What should I have to do</button>
    </div>
)


export default Action;