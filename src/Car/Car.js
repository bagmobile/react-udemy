import React from "react";
import styles from "./Car.module.css";
import withClass from "../hoc/withClass";
import PropTypes from "prop-types";


class Car extends React.Component {

    /*componentWillReceiveProps(nextProps, nextContext) {
        console.log(`componentWillReceiveProps`, nextProps)
    }*/


    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(`shouldComponentUpdate`, nextProps, nextState);
        return nextProps.name.trim() !== this.props.name.trim();
    }*/

    /* static getDerivedStateFromProps(nextProps, prevState){
         console.log(nextProps, prevState);
         return prevState;
     }*/

    /* componentWillUpdate(nextProps, nextState, nextContext) {
         console.log(`componentWillUpdate`, nextProps, nextState)
     }*/

    /*getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`getSnapshotBeforeUpdate`)
    }*/

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`componentDidUpdate`, prevProps, prevState)
    }

    componentWillUnmount() {
        console.log(`componentWillUnmount`);
    }*/

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }


    render() {
        const {index, name, year, children, onClick, onChange, onDelete} = this.props;

        let inputClasses = [styles.input];

        if (name === ``) {
            inputClasses.push(styles.red);
        } else {
            inputClasses.push(styles.green);
        }
        if (name.length > 4) {
            inputClasses.push(styles.bold);
        }

        return (
            <>
                <h1>This is a car</h1>
                <p>Name: {name}</p>
                <p>Year: {year}</p>
                <button onClick={() => onClick(name)}>Click</button>
                <input
                    ref={this.inputRef}
                    className={inputClasses.join(` `)}
                    onChange={(evt) => onChange(index, evt.target.value)}
                    value={name}
                />
                <button onClick={() => onDelete(index)}>Delete</button>
                {children}
            </>);
    }
}

Car.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    year: PropTypes.number,
    children: PropTypes.object,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, styles.Car);