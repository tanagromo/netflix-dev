import { GraphQLList } from 'graphql';
import Rating from '../../../models/ratings';
import {RatingType} from '../../types/ratings';

const queryAllRatings = {
    type: new GraphQLList(RatingType),
    resolve(){
        const ratings = Rating.find().exec() //query que trae objetos de mongo
        if(!ratings) throw new Error ("Error al traer de la bd");
        return ratings
    }
}

export default queryAllRatings;