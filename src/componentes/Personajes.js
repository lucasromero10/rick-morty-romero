import React, { Component } from 'react';



class Personajes extends Component{

    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        }
    }

    CambiarColor(colorNuevo) {
        this.setState({
            color: colorNuevo
        })

    }

    render() {
        return (
            <div className="Personaje-1" style={{backgroundColor: this.state.color}}
            onMouseEnter={() => this.CambiarColor(this.props.highlightColor)}
            onMouseLeave={() => this.CambiarColor(this.props.color)}>

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

                <button onClick={() => this.CambiarColor(this.props.selectionColor)}>
                    Cambiar Color
                </button>
            </div>
        );
    };
}

export default Personajes;