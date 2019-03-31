
import React, { Component } from 'react';
//import logo from './logo.svg';
import AppCss from './App.module.css';
import Persons from '../components/Persons/Persons';
import PersonCss from '../components/Persons/Person/Person.module.css';
import Cockpit from '../components/Cockpit/Cockpit'

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

    

    let persons = null;
   


    if (this.state.showPerson) {
      //dynamically list print
      persons =(
                  <Persons 
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangeHandler}
                  />
                   )


      
  }

  
 

    return (
      
        <div className={AppCss.App}>
          <Cockpit 
          showPerson ={this.state.showPerson}
          persons= {this.state.persons}
          toggled = {this.togglePersonHandler}
          
          />
          {persons}
        </div>
 
    );
  }
}

export default App;
