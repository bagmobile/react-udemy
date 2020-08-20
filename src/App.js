import React from 'react';
import './App.css';
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            cars: [
                {name: `Mazda`, year: 2011},
                {name: `Audi`, year: 2017},
                {name: `Ford`, year: 2001},
            ],
            title: `Reactive cars`,
            showCars: false
        }
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


    /*componentWillMount() {
        console.log(`componentWillMount`)
    }

    componentDidMount() {
        console.log(`componentDidMount`)
    }*/

    render() {

        return (
            <div className="App">
                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter/>
                </ClickedContext.Provider>
                <button onClick={() => this.setState({clicked: !this.state.clicked})}>Click-ай</button>
                <hr/>
                <h1 style={{textDecoration: 'underline'}}>{this.props.title}</h1>
                <input type={`text`} onChange={(evt) => this.changeTitleHandler(evt.target.value)}/>
                <button onClick={() => this.changeTitleHandler(`BAM`)}>Change title</button>

                <input type={`checkbox`} onChange={this.handleCarListToggle}/>
                <div style={{width: 400, margin: `auto`}}>
                    {this.state.showCars && this.state.cars.map((item, index) =>
                        <ErrorBoundary key={index}>
                            <Car

                                index={index}
                                name={item.name}
                                year={item.year}
                                onClick={this.changeTitleHandler}
                                onChange={this.handleCarNameChange}
                                onDelete={this.handleCarDelete}
                            /></ErrorBoundary>)}
                </div>
            </div>
        );
    }
}


export default App;
