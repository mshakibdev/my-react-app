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
  otherstate :[]
}

    switchNameHandler = () => {
        // console.log("clicked");
        //Don't do this -> this.state.persons[0].name ="shakib";
        this.setState ({
          persons :[
            {name:"Abdus salam" ,age: 23},
            {name: "Kalam",age: 24},
            {name:"Rahim" ,age: 22},
          ]
        })
      }
  render() {
    // className is used for tageting css for App
    return (
      <div className="App">
        <h1>Alhamdulillah</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age = {this.state.persons[0].age} 
        click={this.switchNameHandler} />
        
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}/>
        <Person name="shakib" age = "25"/>
        <Person name="Rafik" age = "25">I like Football.</Person>

      </div>
    );
  }
}

export default App;
