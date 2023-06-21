import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age:29,
            name: 'Luciano'
        }
    }

    render() {
        return (
            <div>
                <h1>Bienvenido {this.props.name}</h1> 
                <span>Tu edad es de {this.state.age} años</span>
                <div>
                    <button onClick={this.birthday}> 
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) =>  
            (
                {
                    age: prevState.age +1
                }
            )
        )
    }
}
 
Greeting.propTypes = {
    age: PropTypes.number
};
 
export default Greeting;
