'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _genres = require('../../../models/genres');

var _genres2 = _interopRequireDefault(_genres);

var _genres3 = require('../../types/genres');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllGenres = {
    type: new _graphql.GraphQLList(_genres3.GenreType),
    resolve: function resolve() {
        var genre = _genres2.default.find().exec(); //query que trae objetos de mongo
        if (!genre) throw new Error("Error al traer de la bd");
        return genre;
    }
};

exports.default = queryAllGenres;