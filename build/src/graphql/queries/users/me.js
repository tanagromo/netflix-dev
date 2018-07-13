'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('../../types/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//este quiery solo funciona para un user autenticado, me da el context user
exports.default = {
    type: _users3.UserType,
    resolve: function resolve(root, params, context) {
        return context.user;
    }
};