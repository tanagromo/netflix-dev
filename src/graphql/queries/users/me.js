import User from '../../../models/users';
import {UserType} from '../../types/users';

//este quiery solo funciona para un user autenticado, me da el context user
export default {
    type:UserType,
    resolve(root,params,context){
        return context.user
    }
}