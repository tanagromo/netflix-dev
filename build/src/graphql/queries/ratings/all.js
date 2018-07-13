'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _ratings = require('../../../models/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

var _ratings3 = require('../../types/ratings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllRatings = {
    type: new _graphql.GraphQLList(_ratings3.RatingType),
    resolve: function resolve() {
        var ratings = _ratings2.default.find().exec(); //query que trae objetos de mongo
        if (!ratings) throw new Error("Error al traer de la bd");
        return ratings;
    }
};

exports.default = queryAllRatings;