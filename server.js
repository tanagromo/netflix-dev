import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/models/users';
import Movie from './src/models/movies';
import {createToken} from './src/resolvers/create';
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';
import {verifyToken} from './src/resolvers/verify';

const app = express();
//variable de entorno
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://admin:admin123@ds125841.mlab.com:25841/netflix-dev')
const db = mongoose.connection;
db.on('error',()=>console.log("Error al conectar a la BD"))
    .once('open',()=>console.log("Conectado a la BD"))

app.use(bodyParser.json());

app.post('/signup',(req,res)=>{
    let user = req.body
    User.create(user).then((user)=>{
        return res.status(201).json({"message":"Usuario Creado",
        "id":user._id})
    }).catch((err)=>{
        console.log(err);
        return res.json(err)
    })
});

app.post('/nmovie',(req,res)=>{
    let movie = req.body
    Movie.create(movie).then((movie)=>{
        return res.status(201).json({"message":"Pelicula Creada",
        "id":movie._id})
    }).catch((err)=>{
        console.log(err);
        return res.json(err)
    })
});

app.post('/login', (req,res)=>{
    const token = createToken(req.body.email,req.body.password).then((token)=>{
        res.status(201).json({token});
    }).catch(()=>{
        res.status(403).json({
            message:"Login Failed!! :( Invalid credentials"
        })
    })
})

app.get('/',(req,res) => {
    //req = request
    //res = response
    res.send("Estoy funcionando...");
})

// middleware para proteger graphql

app.use('/graphql',(req,res,next)=>{
    const token = req.headers['authorization'];
    try{
        req.user = verifyToken(token)
        next();
    }catch(error){
        res.status(401).json({message:error.message})

    }
})

// si funciona ya pasamos al sig a poder hacer queries

app.use('/graphql',graphQLHTTP((req,res)=>({
    schema,
    graphiql:true, //graphi: cliente de graphql
    pretty:true,
    context:{
        user:req.user
    }
})))


app.listen(PORT,() => {
    console.log("Magic Happens in port: "+PORT)
})