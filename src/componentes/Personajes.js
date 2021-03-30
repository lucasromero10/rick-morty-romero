import React from 'react';

function Personajes(props) {
    return(
        <React.Fragment> 
            <div className="Personaje-1">
            <img src={props.personaje.image} alt="" />

            <h4>
                {props.personaje.name}
            </h4>

            <p>
            {props.personaje.status}

            </p>

            <p>
            {props.personaje.species}

            </p>

            <p>
                Origin: 
            {props.personaje.origin.name}

            </p>
            </div>
        </React.Fragment>
    );
}

export default Personajes;