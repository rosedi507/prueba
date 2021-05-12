import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import botonizquierda from './izquierdabtn.png';
import { BrowserRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import PokemonDetallado from './views/PokemonDetallado';
import './estiloInicio.css';
import MisPokemon from './MisPokemon';
/*const Header = () => {
    const location = useLocation();
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    }
    const atAboutPage = location.pathname.includes('/pokemondetallado')
    const mispoke = location.pathname.includes('/mispokemon')
    return mispoke && <button className="btn" onClick={handleBackClick} ><img className="botonesNav" src={botonizquierda}></img></button>
    return atAboutPage && <button className="btn" onClick={handleBackClick} ><img className="botonesNav" src={botonizquierda}></img></button>
}*/

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>

            <Switch>

                <Route exact path='/' component={App} />
                <Route path="/pokemondetallado/:id" component={PokemonDetallado} />
                <Route path="/mispokemon" component={MisPokemon} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//export default Header;
