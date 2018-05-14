import React from 'react';

// import classes from './Cockpit.css';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi, I'm a React App!</h1>
            <p>This is really working</p>
            <button 
            // style={style}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;