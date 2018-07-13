//types:sirve para hacer queries y mutations, hay para lectura y escritura

import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql'

//import User from '../../models/users';
//creo un nuevo objeto
export const UserType = new GraphQLObjectType({
    name:"ListUsers",
    description:"Lista Usuarios de la BD",
    fields: () =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        },
        is_admin:{
            type:GraphQLBoolean
        },
        create_at:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        },
        client_id:{ //Este es para el procesador de pagos
            type:GraphQLString
        }
    })
});
//escritura
export const UserInputType = new GraphQLInputObjectType({
    name:"AddUsers",
    description:"Agrega, modifica nuevos Usuarios de la BD",
    fields: () =>({
        
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        password:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        }
        
    })


})