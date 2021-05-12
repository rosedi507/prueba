import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CajaPokemon from './CajaPokemon';


import botonizquierda from './izquierdabtn.png';
import botonderecha from './derechabtn.png';
import { listadoPokemons, obtenerPokemonInfo } from './ListaPokemon';




function App() {

    const urlprincipal = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=200';

    const [listaPokemon, setListaPokemon] = useState([])
    const [anteriorPag, setAnteriorPag] = useState('')
    const [siguientePag, setSiguientePag] = useState('')
    const [cargando, setCargando] = useState(true)


    const peticion = async () => {
        const response = await listadoPokemons(urlprincipal);//funcion  para obtener el listado de todos los pokemon

        setSiguientePag(response.next);
        setAnteriorPag(response.previous);
        await cargarPokemons(response.results);
        setCargando(false);

    }
    useEffect(() => {


        peticion(); //inicializando la funcion para obtener ell listado de pokemon

    }, []);

    const siguiente = async () => {
        setCargando(true);
        let data = await listadoPokemons(siguientePag);
        await cargarPokemons(data.results)                         //funcion que controla los botones de regresar y avanzar
        setSiguientePag(data.next);
        setAnteriorPag(data.previous);
        setCargando(false);
    }

    const anterior = async () => {

        if (!anteriorPag) {
            return setCargando(true);
        }                                                        //funcion que controla los botones de regresar y avanzar
        setCargando(true);
        let data = await listadoPokemons(anteriorPag);
        await cargarPokemons(data.results)
        setSiguientePag(data.next);
        setAnteriorPag(data.previous);
        setCargando(false);
    }




    const cargarPokemons = async (data) => {
        let pokemonInfo = await Promise.all(data.map(async pokemon2 => {
            let pokemonArchivo = await obtenerPokemonInfo(pokemon2.url);  //funcion para obtener los detalles de los pokemomn
            return pokemonArchivo;

        }))
        setListaPokemon(pokemonInfo);
    };

    const history = useHistory();
    const handleClick = () => { //redirige a otra pagina
        history.push('/mispokemon');
    }
    return (
        <div>
            <h1 className="titulo">Pokedex</h1>
            <div className="caja_btn">
                <button onClick={() => handleClick()}>Mis Pokemons</button>
            </div>
            {cargando ? (<h1> Cargando...</h1>) : (
                <>


                    <div className="grid-container">
                        {

                            listaPokemon.map((pokemon2, i) => {
                                return <CajaPokemon key={i} pokemon2={pokemon2} />;
                            })
                        }
                    </div>
                    <div className="contenedorBotones">
                        <button className="btn" onClick={anterior} ><img className="botonesNav" src={botonizquierda}></img></button>
                        <button className="btn" onClick={siguiente}><img className="botonesNav" src={botonderecha}></img></button>
                    </div>



                </>


            )

            }

        </div>);
}
export default App;
