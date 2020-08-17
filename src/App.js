import React from 'react';
import './App.css';
import Car from "./Car/Car";

/*function App() {
    return (
        <div className="App">
            <h1 style={{textDecoration: 'underline'}}>Hello world</h1>
            <Car name={`Audi`} year={`2018`}>
            children car
            </Car>
        </div>
    );
}*/

class App extends React.Component {

    state = {
        cars: [
            {name: `Mazda`, year: 2011},
            {name: `Audi`, year: 2017},
            {name: `Ford`, year: 2001},
        ],
        title: `Reactive cars`,
        showCars: true
    }

    changeTitleHandler = (title) => {
        this.setState({title});
    }

    handleCarListToggle = () => {
        this.setState({showCars: !this.state.showCars})
    };
    handleCarNameChange = (index, value) => {
        this.setState({cars: this.state.cars.map((item, i) => index === i ? {...item, name: value} : item)});
    };
    handleCarDelete = (index) => {
        this.setState({cars: this.state.cars.filter((item, i) => i !== index)});
    }

    render() {
        return (
            <div className="App">
                <h1 style={{textDecoration: 'underline'}}>{this.state.title}</h1>
                <input type={`text`} onChange={(evt) => this.changeTitleHandler(evt.target.value)}/>
                <button onClick={() => this.changeTitleHandler(`BAM`)}>Change title</button>

                <input type={`checkbox`} onChange={this.handleCarListToggle}/>
                <div style={{width:400, margin:`auto`}}>
                    {this.state.showCars && this.state.cars.map((item, index) =>
                        <Car
                            key={index}
                            index={index}
                            name={item.name}
                            year={item.year}
                            onClick={this.changeTitleHandler}
                            onChange={this.handleCarNameChange}
                            onDelete={this.handleCarDelete}
                        />)}
                </div>
            </div>
        );
    }
}


export default App;
