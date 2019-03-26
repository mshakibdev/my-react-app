
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

//class component
class App extends Component {

state = {
  persons :[
    {name:"salam" ,age: 33},
    {name: "kalam",age: 34},
    {name:"Rahim" ,age: 32},
  ],
  otherstate :[],
  showPerson:false,
}

    switchNameHandler = (newName) => {
        // console.log("clicked");
        //Don't do this -> this.state.persons[0].name ="shakib";
        this.setState ({
          persons: [
            {name: newName ,age      : 23},
            {name: "Kalam",age       : 24},
            {name: "Abdur Rahim" ,age: 22},
          ]
        })
      }

      nameChangeHandler = (event) => {
        this.setState ({
          persons: [
            {name: "salam",age : 23},
            {name:  event.target.value,age   : 24},
            {name: "Abdur Rahim" ,age: 22},
          ]
        })
      }

      togglePersonHandler = () => {
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
      persons =(
           <div>
                <Person 
                name={this.state.persons[0].name} 
                age = {this.state.persons[0].age} 
                click={this.switchNameHandler.bind(this,'Shishir')} 
                />
                <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}
                changed = {this.nameChangeHandler}/>
                <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}/>
                <Person name="shakib" age = "25"/>
                <Person name="Rafik" age = "25"
                >I like Football.</Person>
          </div>
      );
      
    } else {
      
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
