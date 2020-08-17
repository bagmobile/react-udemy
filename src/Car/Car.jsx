import React from "react";
import "./Car.css"
import Radium from "radium";

const Car = ({index, name, year, children, onClick, onChange, onDelete}) => {
    let inputClasses = [`input`];

    if (name === ``) {
        inputClasses.push(`red`);
    } else {
        inputClasses.push(`green`);
    }
    if (name.length > 4) {
        inputClasses.push(`bold`);
    }

    return (<div style={{
        border: `1px solid #ccc`,
        boxShadow: `0 4px 5px 0 rgba(0,0,0, .14)`,
        marginTop: 10,
        paddingBottom: 5,
        borderRadius: 3,
        transition: `border, box-shadow .5s`,
        ':hover': {
            border: `1px solid #aaa`,
            boxShadow: `0 4px 15px 0 rgba(0,0,10, .30)`,
            cursor: `pointer`
        }
    }}>
        <h1>This is a car</h1>
        <p>Name: {name}</p>
        <p>Year: {year}</p>
        <button onClick={() => onClick(name)}>Click</button>
        <input
            className={inputClasses.join(` `)}
            onChange={(evt) => onChange(index, evt.target.value)}
            value={name}
        />
        <button onClick={() => onDelete(index)}>Delete</button>
        {children}
    </div>);
};

export default Radium(Car);