import React, { Component } from 'react'
import CounterView from '../components/CounterView'

class CounterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue:0,
            isEven: true,
        };
    }

    handleIncrement = () => {
        this.setState( (state) => {
            const incrementedValue = state.countValue + 1;
            const isEven = incrementedValue %2 ===0;

            return {
                countValue: incrementedValue,
                isEven,
            };
        });
    }

    handleDecrement = () => {
        if (this.state.countValue>0) {
            this.setState( (state) => {
                const decrementedValue = state.countValue - 1;
                const isEven = decrementedValue %2 ===0;

                return {
                    countValue: decrementedValue,
                    isEven: isEven,
                };       
            });
        };
    };

    handleReset = () => {
        this.setState( (state) => {
        
        return {
            countValue:0,
        }    

        })
    }

    render() {
        return (
            <CounterView 
            countValue={this.state.countValue} 
            handleIncrement ={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleReset={this.handleReset}/>
        )
    }
}

export default CounterContainer;
