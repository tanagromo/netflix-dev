import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'
import Rating from '../../../models/ratings';
import {RatingInputType,RatingType} from '../../types/ratings';

export default {
    type:RatingType,
    args:{
        id:{
            name:"ID",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteRating = Rating.findByIdAndRemove(params.id).exec()
        if(!deleteRating) throw new Error("Error al borrar rating");
        return deleteRating
    }
}