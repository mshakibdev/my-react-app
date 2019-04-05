import React ,{ PureComponent} from 'react';
import Person from './Person/Person';
// const persons = (props) = > () || this func. is return without return keyword if wrote in one line like this.
class Persons extends PureComponent {
  constructor(props){
    super(props);
    console.log("[Persons.js] inside constructor",props);
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()");
    
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount()");

  }

  //updating components
  componentWillReceiveProps(nextProps){

    console.log("[Update Persons.js] inside componentWillReceiveProps()",nextProps);

  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Update Persons.js] inside shouldComponentUpdate()",nextProps,nextState);
  //    //return true;
  //   //return true or false
  //    return nextProps.persons !== this.props.persons || 
  //           nextProps.changed !== this.props.changed || 
  //           nextProps.clicked !== this.props.clicked  ;
     //it handles the performance issue as it returns true if and only if the person is updated !

    // nextProps.persons = preivious persons
    // this.persons = Updated person
    // more examples:
    //nextProps.changed !== this.props.changed 
    //nextProps.clicked !== this.props.clicked 
  //}

  componentWillUpdate(nextProps, nextState) {
    console.log("[Update Persons.js] inside componentWillUpdate()",nextProps,nextState);

  }
  
  
  componentDidUpdate(prevProps, prevState) {
    console.log("[Update Persons.js] inside componentDidUpdate()",prevProps,prevState);

  }


  render(){

    console.log("[Persons.js] inside render()");

    return this.props.persons.map( (singlePerson,index) => {
      return <Person
      click ={ () => this.props.clicked(index)}//delete method
      name={singlePerson.name}
      age = {singlePerson.age}
      key = {singlePerson.id}
      changed={(event)=>this.props.changed(event, singlePerson.id)} />//update method
    })
  }
}

export default Persons; 