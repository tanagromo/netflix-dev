'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _movies = require('../../../models/movies');

var _movies2 = _interopRequireDefault(_movies);

var _movies3 = require('../../types/movies');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleMovie = {

    type: _movies3.MovieType,
    args: {
        id: { //**id
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)

        }
    },
    resolve: function resolve(root, params) {
        //root es el request
        var movie = _movies2.default.findById(params.id).exec(); //**id 
        return movie;
    }
};
exports.default = querySingleMovie;