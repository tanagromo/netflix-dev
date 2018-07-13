import {GraphQLNonNull, GraphQLID} from 'graphql';
import Movie from '../../../models/movies';
import {MovieType} from '../../types/movies';

const querySingleMovie = {

    type:MovieType,
    args:{
        id:{ //**id
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },
    resolve(root,params){ //root es el request
        const movie = Movie.findById(params.id).exec() //**id 
        return movie
    }

}
export default querySingleMovie;