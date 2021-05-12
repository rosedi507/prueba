const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const ejs = require('ejs');
const morgan = require('morgan');
const bodyparser = require('body-parser')
const myconnection = require('express-myconnection');
const path = require('path')
 //importar rutas

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'views'));
app.set(bodyparser.json());
app.bodyparser.urlencoded({extended: false});
app.use(morgan('dev'));


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'pokemonguardados'

})

conexion.connect(function (error) {
    if (!!error) console.log(error);
    else console.log('conectado');
})



//rutas

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), ()=>{
console.log("todo okis")
});
