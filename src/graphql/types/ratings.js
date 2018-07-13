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
export const RatingType = new GraphQLObjectType({
    name:"ListRatings",
    description:"Lista Ratings de la BD",
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
        age:{
            type:GraphQLInt
        },
        is_active:{
            type:GraphQLBoolean
        }
    })
});
//escritura
export const RatingInputType = new GraphQLInputObjectType({
    name:"AddRating",
    description:"Agrega, modifica nuevos Ratings de la BD",
    fields: () =>({
        
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        }
        
    })


})