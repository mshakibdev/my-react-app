import React from 'react';
import Person from  './Person.module.css'


//function component or js arrow function in es7
const person = (props) => {
    
    return (
        <div className="Person" >
            <p onClick ={props.click}>
                I am {props.name} and I am {props.age}. Meeting after {Math.floor(Math.random()*30)} years
            </p>
            <p>{props.children}</p>

            <input type="text" onChange={props.changed} value={props.name}/>


        </div>
    
        )
}

export default person;

// class based component -> change state -> Update dom
// function based component -> change props -> Update dom
//for class based components -> "this.props"
//for function based based components -> "props.props_name"