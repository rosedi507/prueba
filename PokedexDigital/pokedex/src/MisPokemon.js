import React from 'react';
import botonizquierda from './izquierdabtn.png';
import { useParams, useHistory } from 'react-router-dom';
const MisPokemon = () => {
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    }


    return <div>

        <button className="btn" onClick={handleBackClick} ><img className="botonesNav" src={botonizquierda}></img></button>
        <h1>Pokedex</h1>
    </div>
}

export default MisPokemon;