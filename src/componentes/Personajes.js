import React, { Component } from 'react';

class Personajes extends Component{
    render() {
        return (
            <div className="Personaje-1">
            <img src={this.props.personaje.image} alt="" />

            <h4>
                {this.props.personaje.name}
            </h4>

            <p>
            {this.props.personaje.status}

            </p>

            <p>
            {this.props.personaje.species}

            </p>

            <p>
                Origin: 
            {this.props.personaje.origin.name}

            </p>
            </div>
        );
    };
}

export default Personajes;