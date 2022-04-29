require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT

hbs.registerPartials( __dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use( express.static('public'));

app.get( '/index', ( req, res ) => {
    res.render('home', {
        nombre: 'Juan Felipe Valencia',
        titulo: 'Curso-Node'
    });
});

app.get( '/generic', ( req, res ) => {
    res.render('generic', {
        nombre: 'Juan Felipe Valencia',
        titulo: 'Curso-Node'
    });
});

app.get( '/elements', ( req, res ) => {
    res.render('elements', {
        nombre: 'Juan Felipe Valencia',
        titulo: 'Curso-Node'
    });
});

app.get( '*', ( req, res ) => {
    res.send('404 | Page not found')
});


app.listen(port);