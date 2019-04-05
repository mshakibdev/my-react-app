import React ,{ Component} from 'react';
import Person from './Person/Person';
// const persons = (props) = > () || this func. is return without return keyword if wrote in one line like this.
class Persons extends Component {
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