import {GraphQLNonNull, GraphQLID} from 'graphql';
import Genre from '../../../models/genres';
import {GenreType} from '../../types/genres';

const querySingleGenre = {

    type:GenreType,
    args:{
        id:{ //**id
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },
    resolve(root,params){ //root es el request
        const genre = Genre.findById(params.id).exec() //**id 
        return genre
    }

}
export default querySingleGenre;