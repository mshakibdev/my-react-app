
import React, { Component } from 'react';
//import logo from './logo.svg';
import AppCss from './App.module.css';
import Persons from '../components/Persons/Persons';
// import PersonCss from '../components/Persons/Person/Person.module.css';
import Cockpit from '../components/Cockpit/Cockpit'

//class component
class App extends Component {
  //In statefull componenet only constructor can receive props and access it without "this" as "props.title" 
  constructor(props){
    super(props);
    console.log("[App.js] inside constructor",props);
    //old method
    this.state = {
      persons :[
        {id:'1',name:"salam" ,age: 33},
        {id:'2',name: "kalam",age: 34},
        {id:'3',name:"Rahim" ,age: 32},
      ],
      otherstate :[],
      showPerson:false,
    }
    
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount()");
    
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount()");

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Update App.js] inside shouldComponentUpdate()",nextProps,nextState);
    
    return true ;
    
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Update App.js] inside componentWillUpdate()",nextProps,nextState);

  }
  
  
  componentDidUpdate(prevProps, prevState) {
    console.log("[Update App.js] inside componentDidUpdate()",prevProps,prevState);

  }
  
// Updated method
// state = {
//   persons :[
//     {id:'1',name:"salam" ,age: 33},
//     {id:'2',name: "kalam",age: 34},
//     {id:'3',name:"Rahim" ,age: 32},
//   ],
//   otherstate :[],
//   showPerson:false,
// }

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

    console.log("[App.js] inside render()");


    let personsComponents = null;
    if (this.state.showPerson) {
      //dynamically list print
      personsComponents =(
                  <Persons 
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangeHandler}
                  />
                   )
      }


      let cockpitComponents = null;
      cockpitComponents = <Cockpit 
                appTitle = {this.props.title}
                showPerson ={this.state.showPerson}
                persons= {this.state.persons}
                toggled = {this.togglePersonHandler}
                
                />
 

    return (
      
        <div className={AppCss.App}>
          {cockpitComponents}
          {personsComponents}
        </div>
 
    );
  }
}

export default App;
