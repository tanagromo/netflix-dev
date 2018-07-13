import { GraphQLList } from 'graphql';
import Movie from '../../../models/movies';
import {MovieType} from '../../types/movies';

const queryAllMovies = {
    type: new GraphQLList(MovieType),
    resolve(){
        const movie = Movie.find().exec() //query que trae objetos de mongo
        if(!movie) throw new Error ("Error al traer de la bd");
        return movie
    }
}

export default queryAllMovies;