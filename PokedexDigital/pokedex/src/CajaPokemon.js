import React, { Component } from 'react';
import './estiloInicio.css';

import { Route, useHistory } from 'react-router-dom';
function CajaPokemon({ pokemon2 }) {
    const history = useHistory();
    const handleClick = (id) => {
        history.push('/pokemondetallado/' + id); //ver detalles de pokemon seleccionado


    }


    return (

        <div className="caja">

            <div className="caja_pic">
                <img src={pokemon2.sprites.front_default} alt='' />

                <div className="nombre">{pokemon2.name}</div>
            </div>


            <div className="caja_pic">

                <button onClick={() => handleClick(pokemon2.id)}> Detalles
                    </button>

            </div>


        </div>

    )
}


export default CajaPokemon;