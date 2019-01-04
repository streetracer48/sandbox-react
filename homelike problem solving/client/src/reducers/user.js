import {
    ADD_TO_CART,

} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){

            case ADD_TO_CART:
            return { ...state, authuser: { 
                ...state.authuser,
               cart: action.payload 
            }}
        default:
            return state;
    }
}