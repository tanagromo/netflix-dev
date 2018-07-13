import {GraphQLNonNull, GraphQLID} from 'graphql';
import Rating from '../../../models/ratings';
import {RatingType} from '../../types/ratings';

const querySingleRating = {

    type:RatingType,
    args:{
        id:{ //**id
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },
    resolve(root,params){ //root es el request
        const rating = Rating.findById(params.id).exec() //**id 
        return rating
    }

}
export default querySingleRating;