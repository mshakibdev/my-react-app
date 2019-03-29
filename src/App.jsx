
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

//class component
class App extends Component {

state = {
  persons :[
    {id:'1',name:"salam" ,age: 33},
    {id:'2',name: "kalam",age: 34},
    {id:'3',name:"Rahim" ,age: 32},
  ],
  otherstate :[],
  showPerson:false,
}

    // switchNameHandler = (newName) => {
    //     // console.log("clicked");
    //     //Don't do this -> this.state.persons[0].name ="shakib";
    //     this.setState ({
    //       persons: [
    //         {name: newName ,age      : 23},
    //         {name: "Kalam",age       : 24},
    //         {name: "Abdur Rahim" ,age: 22},
    //       ]
    //     })
    //   }
  
    
    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();// copy the full array
      const persons = [...this.state.persons]//spread method means added new element with the old array and update the old array
      persons.splice(personIndex,1);//remove one element from person
      this.setState( {persons : persons})//updating the state
    };

      nameChangeHandler = (event,id) => {
      const personIndex = this.state.persons.findIndex( p=>{
       return  p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex] 

      };
      
     person.name=event.target.value;
      // const person = Object.assign({},this.state.persons[personIndex])
    
      const persons = [...this.state.persons];

      persons[personIndex] = person;


        this.setState ({
          persons: persons
        })
      }

      togglePersonHandler 
      = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow})
      }
    
  render(){
    // className is used for tageting css for App

    const myStyle = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'poniter'
    };

    let persons = null;

    if (this.state.showPerson) {
      //dynamically list print
      persons =(
           <div>
             {this.state.persons.map( (singlePerson,index) => {
               return <Person 
               click ={ () => this.deletePersonHandler(index)}//delete method
               name={singlePerson.name}
               age = {singlePerson.age}
               key = {singlePerson.id}
               changed={(event)=>this.nameChangeHandler(event, singlePerson.id)} />//update method
             })}
                
          </div>
      )
      
  }
    return (
      <div className="App">
        <h1>Alhamdulillah</h1>
        <button style={myStyle} onClick={this.togglePersonHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
