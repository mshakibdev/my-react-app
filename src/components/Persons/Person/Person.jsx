import React ,{ Component} from 'react';
import PersonCss from  './Person.module.css'


//function component or js arrow function in es7

class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] inside constructor",props);
      }
    
      componentWillMount() {
        console.log("[Person.js] inside componentWillMount()");
        
      }
    
      componentDidMount() {
        console.log("[Person.js] inside componentDidMount()");
    
      }
    render(){
        console.log("[Person.js] inside render()");

        return (
            <div className={PersonCss.Person} >
                    <p onClick ={this.props.click}>
                        I am {this.props.name} and I am {this.props.age}. Meeting after {Math.floor(Math.random()*30)} years
                    </p>
                    <p>{this.props.children}</p>

                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
        
    }
}


export default Person;

// class based component -> change state -> Update dom
// function based component -> change props -> Update dom
//for class based components -> "this.props"
//for function based based components -> "props.props_name"