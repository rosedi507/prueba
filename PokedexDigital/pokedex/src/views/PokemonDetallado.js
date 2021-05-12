import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import '../estiloInicio.css';
import axios from 'axios';
import botonizquierda from '../izquierdabtn.png';



const PokemonDetallado=()=> {
	const  params  = useParams();
	const urlpokemon = 'https://pokeapi.co/api/v2/pokemon/'
	const urlfinalpokemon = urlpokemon + params.id+"/";
	const [picPokemon, setPicPokemon] = useState([]);
	const [nombre, setNombre] = useState([]);
	const [tipo, setTipo] = useState([]);
	const [habilidad, setHabilidad] = useState([]);
const [idpokemon, setIdPokemon]=useState();

	const history = useHistory();
	


console.log();

	const peticion =() => {
		axios.get(urlfinalpokemon)
			.then((response) => {
				const data = response.data;
				setPicPokemon(data.sprites.front_default); //asigna a una variable los detalles obtenidos del url del pokemon seleccionado
				setNombre(data.species.name);
				setTipo(data.types);
				setHabilidad(data.abilities);

			})
			.catch((err) => {
				console.log(err);
			})

setIdPokemon(params.id)
	}

	const handleClick = () => {
		history.push('/mispokemon');
	}

	useEffect(() => {
		
		peticion();
	}, [])
	
	
		const handleBackClick = () => {
			history.goBack();
		}
	return (

		<div>
			<h1 className="titulo">Pokedex</h1>
			<button className="btn" onClick={handleBackClick} ><img className="botonesNav" src={botonizquierda}></img></button>
			
			<div className="caja_det">
				<div className="caja_pic">
					<img src={picPokemon} className="imagenDetalles"></img>
					{/*picPokemon.map((ipk) =>
						<p>{ipk.base_experience}</p>)*/} 
				</div>

				<div className="nombreDetalles">
					<h1>{nombre}</h1>
				</div>
				<div className="cajaDetalles">
					<div>
						<h3>Tipo:</h3>
					<ul>
						{tipo.map((ipk) =>
							<li><h4> {ipk.type.name}</h4></li>)}
						</ul>
				</div>
					
					<div className="cajaDetalles">
						<h3>Habilidad:</h3>
					{
						habilidad.map((ipk) =>
							<h4> {ipk.ability.name}</h4>)
							}
							
					</div>
				</div>
				<div className="caja_btn">
					<form action="/add" method="post">
						<input type="submit" name="idpokemon" value={idpokemon} hidden="true"/>
						<input type="submit" name="nombre" value={nombre} hidden="true" />
						<input type="submit" value={picPokemon} name="picPokemon" hidden="true" />
					<button type="submit" >Agregar a Mi Pokedex</button>
					</form>

			
						</div>
			</div>
			
			
			
			
			
		</div>
	);
}

export default PokemonDetallado;
