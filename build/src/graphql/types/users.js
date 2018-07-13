"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require("graphql");

//import User from '../../models/users';
//creo un nuevo objeto
var UserType = exports.UserType = new _graphql.GraphQLObjectType({
    name: "ListUsers",
    description: "Lista Usuarios de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            lastname: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            photo: {
                type: _graphql.GraphQLString
            },
            is_admin: {
                type: _graphql.GraphQLBoolean
            },
            create_at: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            client_id: { //Este es para el procesador de pagos
                type: _graphql.GraphQLString
            }
        };
    }
});
//escritura
//types:sirve para hacer queries y mutations, hay para lectura y escritura

var UserInputType = exports.UserInputType = new _graphql.GraphQLInputObjectType({
    name: "AddUsers",
    description: "Agrega, modifica nuevos Usuarios de la BD",
    fields: function fields() {
        return {

            name: {
                type: _graphql.GraphQLString
            },
            lastname: {
                type: _graphql.GraphQLString
            },
            password: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            photo: {
                type: _graphql.GraphQLString
            }

        };
    }

});