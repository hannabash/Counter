import React, { Component } from 'react'
import CounterView from '../../../commonComponents/CounterView'

class CounterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue:0,
            isEven: true,
        };
    }

    componentDidUpdate (propState, prevState) {
        if (prevState.countValue !== this.state.countValue) {
            this.setState({ isEven: this.state.countValue % 2 === 0 })            
        }
    }

    handleIncrement = () => {
        this.setState( (state) => {
            const incrementedValue = state.countValue + 1;

            return {
                countValue: incrementedValue,
            };
        });
    }

    handleDecrement = () => {
        if (this.state.countValue>0) {
            this.setState( (state) => {
                const decrementedValue = state.countValue - 1;

                return {
                    countValue: decrementedValue,
                };       
            });
        };
    };

    handleReset = () => {
        this.setState({countValue:0})
    }

    render() {
        return (
            <CounterView
            isEven={this.state.isEven}
            countValue={this.state.countValue} 
            handleIncrement ={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleReset={this.handleReset}/>
        )
    }
}

export default CounterContainer;
