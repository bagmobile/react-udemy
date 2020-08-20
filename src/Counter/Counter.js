import React from "react";
import Auxiliary from "../hoc/Auxiliary"
import Counter2 from "../Counter2/Counter2";

export default class Counter extends React.Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        });
    }

    render() {
        /*  return [
              <h1 key={`1`}>Counter: {this.state.counter}</h1>,
              <button key={`2`} onClick={this.addCounter}>+</button>,
              <button key={`3`} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
          ];*/

        return (
            <Auxiliary>
                <h1>Counter: {this.state.counter}</h1>
                <Counter2/>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        );

        /* return (
             <React.Fragment>
                 <h1>Counter: {this.state.counter}</h1>
                 <button onClick={this.addCounter}>+</button>
                 <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
             </React.Fragment>
         );
         return (
             <>
                 <h1>Counter: {this.state.counter}</h1>
                 <button onClick={this.addCounter}>+</button>
                 <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
             </>
         );*/
    }
}