import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'
import Movie from '../../../models/movies';
import {MovieInputType,MovieType} from '../../types/movies';

export default {
    type:MovieType,
    args:{
        id:{
            name:"ID",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteMovie = Movie.findByIdAndRemove(params.id).exec()
        if(!deleteMovie) throw new Error("Error al borrar la pelicula");
        return deleteMovie
    }
}