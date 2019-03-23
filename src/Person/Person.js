import React from 'react';

//function component or js arrow function in es7
const person = (props) => {
    return (
<div>
    <p onClick ={props.click}>
        I am {props.name} and I am {props.age}. Meeting after {Math.floor(Math.random()*30)} years
    </p>
    <p>{props.children}</p>


</div>
    
        )
}

export default person;