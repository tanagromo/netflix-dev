import { GraphQLList } from 'graphql';
import Genre from '../../../models/genres';
import {GenreType} from '../../types/genres';

const queryAllGenres = {
    type: new GraphQLList(GenreType),
    resolve(){
        const genre = Genre.find().exec() //query que trae objetos de mongo
        if(!genre) throw new Error ("Error al traer de la bd");
        return genre
    }
}

export default queryAllGenres;