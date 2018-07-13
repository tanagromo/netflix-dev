//types:sirve para hacer queries y mutations, hay para lectura y escritura

import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql'

//creo un nuevo objeto
export const GenreType = new GraphQLObjectType({
    name:"ListGenres",
    description:"Lista Generos de la BD",
    fields: () =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        }
    })
});
//escritura
export const GenreInputType = new GraphQLInputObjectType({
    name:"AddGenre",
    description:"Agrega, modifica nuevos Generos de la BD",
    fields: () =>({
        
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        }
        
    })


})