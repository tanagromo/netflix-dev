//types:sirve para hacer queries y mutations, hay para lectura y escritura

import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLList
} from 'graphql'

import {GenreType} from './genres';
import {RatingType} from './ratings';
import Genre from '../../models/genres';
import Rating from '../../models/ratings';

//import User from '../../models/users';
//creo un nuevo objeto
export const MovieType = new GraphQLObjectType({
    name:"ListMovies",
    description:"Lista Peliculas de la BD",
    fields: () =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        plot:{
            type:GraphQLString
        },
        genre:{
            type:GenreType,
            resolve(movie){
                const {genre} = movie
                return Genre.findById(genre).exec()
            }
        },
        url:{
            type:GraphQLString
        },
        director:{
            type:GraphQLString
        },
        year:{
            type:GraphQLString
        },
        rate:{
            type:GraphQLList(GraphQLFloat)
        },
        rating:{ 

            type:RatingType,
            resolve(movie){
                const {rating} = movie
                return Rating.findById(rating).exec()
            }
        },
        is_active:{
            type:GraphQLBoolean
        },
        upload_at:{
            type:GraphQLString
        },
    })
});
//escritura
export const MovieInputType = new GraphQLInputObjectType({
    name:"AddMovies",
    description:"Agrega, modifica nuevas Peliculas de la BD",
    fields: () =>({
        
        name:{
            type:GraphQLString
        },
        plot:{
            type:GraphQLString
        },
        genre:{
            type:GraphQLString
        },
        url:{
            type:GraphQLString
        },
        director:{
            type:GraphQLString
        },
        year:{
            type:GraphQLString
        },
        rating:{ 
            type:GraphQLString
        }
        
    })


})

export const RateMovieType = new GraphQLInputObjectType({
    name:"addRate",
    description:"Agrega rate a Movie",
    fields:() =>({
        rate:{
            type:GraphQLFloat
        }
    })
});