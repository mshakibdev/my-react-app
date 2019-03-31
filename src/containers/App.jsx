
import React, { Component } from 'react';
//import logo from './logo.svg';
import AppCss from './App.module.css';
import Persons from '../components/Persons/Persons';
import PersonCss from '../components/Persons/Person/Person.module.css';

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
    let btnclass = ' ';

    if (this.state.showPerson) {
      //dynamically list print
      persons =(
           <div>
             <Persons 
             persons = {this.state.persons}
             clicked = {this.deletePersonHandler}
             changed = {this.nameChangeHandler}
             />
                
          </div>
          
      )

      btnclass = AppCss.Red;

      
  }

  // let cssClasses=['red','bold'].join(' ');// ['red' 'bold']
    const cssClasses = [];
    if (this.state.persons.length<=2) {
      cssClasses.push(PersonCss.red);// ['red']
    }
    if (this.state.persons.length<=1) {
        cssClasses.push(PersonCss.bold);  // ['red' 'blue']    
    }

 

    return (
      
        <div className={AppCss.App}>
          <h1>My React App</h1>
          <p className={cssClasses.join(' ')}>List of persons</p>
          <button className={btnclass} onClick={this.togglePersonHandler}>Toggle</button>
          {persons}
        </div>
 
    );
  }
}

export default App;
