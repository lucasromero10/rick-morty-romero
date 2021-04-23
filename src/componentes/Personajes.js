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
            <React.Fragment>  

            <div className="Personaje-1" style={{backgroundColor: this.state.color}}
            onMouseEnter={() => this.CambiarColor(this.props.highlightColor)}
            onMouseLeave={() => this.CambiarColor(this.props.color)}>

                <img src={this.props.elemento.picture.large} alt="" />

                <h4>
                   Apellido: {this.props.elemento.name.last}
                </h4>

                <p>
                 
                 Nombre: {this.props.elemento.name.first}

                </p>

                <p>
                
                 Email: {this.props.elemento.email}

                </p>

                <p>
                
                Fecha de Nacimiento: {this.props.elemento.dob.date}

                </p>

                <button onClick={() => this.CambiarColor(this.props.selectionColor)}>
                    Cambiar Color
                </button>
            </div>
            </React.Fragment>       

        );
    };
}

export default Personajes;