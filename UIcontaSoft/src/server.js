import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import { MAIN_DIR } from '../global.js';


//global variables
var path = require("path");
var M_DIR = MAIN_DIR;
var DIST_DIR = path.join(M_DIR, "public/dist");
var INDEX_DIR = path.join(M_DIR, "src/client");

console.log("M_DIR:"+M_DIR);
console.log("INDEX_DIR:"+INDEX_DIR);


// initialization package
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use('/public', express.static(path.join(__dirname, 'public')))
//app.use(express.static('public'));
//app.use(webpackDevMiddleware(webpack(webpackConfig)));
//app.use(express.static('/static/js/'));
//app.use(express.static('dist'));
//app.use(express.static(__dirname +'client/style/'));
//app.use("/public", express.static(path.resolve(__dirname, 'public')));

console.log("dirname:"+__dirname);

//routes
app.get('/', (req, res) =>{
    //app.get('http://localhost:8080/api/templates', (req, res) =>{
      //  console.log(res);
    //})
    //res.sendFile(path.join(INDEX_DIR, "index.html"));
    res.sendFile(path.join(INDEX_DIR, "login.html"));
    //console.log('hola');
    //console.log(M_DIR);
    //res.send('Hellow World');
});

app.get('/dashboard', (req, res) =>{

    console.log('/dashboard');
    res.sendFile(path.join(INDEX_DIR, "dashboard.html"));
    //res.send('Hellow World');

});

app.get('/newtaxpayer', (req, res) =>{

    console.log('/newtaxpayer');
    res.sendFile(path.join(INDEX_DIR, "newTaxPayer.html"));

});


app.listen( app.get('port') , () => {
 console.log('server on port', app.get('port'));
});
