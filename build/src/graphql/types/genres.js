"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenreInputType = exports.GenreType = undefined;

var _graphql = require("graphql");

//creo un nuevo objeto
var GenreType = exports.GenreType = new _graphql.GraphQLObjectType({
    name: "ListGenres",
    description: "Lista Generos de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});
//escritura
//types:sirve para hacer queries y mutations, hay para lectura y escritura

var GenreInputType = exports.GenreInputType = new _graphql.GraphQLInputObjectType({
    name: "AddGenre",
    description: "Agrega, modifica nuevos Generos de la BD",
    fields: function fields() {
        return {

            name: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            }

        };
    }

});