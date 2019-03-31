import React from 'react';
import Person from './Person/Person';
// const persons = (props) = > () || this func. is return without return keyword if wrote in one line like this.
const persons = (props) => (
    props.persons.map( (singlePerson,index) => {
        return <Person
        click ={ () => props.clicked(index)}//delete method
        name={singlePerson.name}
        age = {singlePerson.age}
        key = {singlePerson.id}
        changed={(event)=>props.changed(event, singlePerson.id)} />//update method
      })
)

export default persons; 