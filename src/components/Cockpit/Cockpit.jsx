import React from 'react';
import CockpitCss from './Cockpit.module.css'


const cockpit = (props) => {
    // let cssClasses=['red','bold'].join(' ');// ['red' 'bold']
    const cssClasses = [];
    let btnclass = ' ';
    if (props.showPerson) {
        btnclass = CockpitCss.Red;
    }
    if (props.persons.length<=2) {
      cssClasses.push(CockpitCss.red);// ['red']
    }
    if (props.persons.length<=1) {
        cssClasses.push(CockpitCss.bold);  // ['red' 'blue']    
    }

    return(
        <div className={CockpitCss.Cockpit}>
            <h1>{ props.appTitle }</h1>
            <p className={cssClasses.join(' ')}>List of persons</p>
            <button className={btnclass} onClick={props.toggled}>Toggle</button>
        </div>
    )

    }
export default cockpit; 