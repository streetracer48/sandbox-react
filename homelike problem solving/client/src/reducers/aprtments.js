import {
   
    GET_APARTMENT_CITYS_LIST,
    GET_PRODUCTS_WOOD_LIST,
    GET_APARTMENTS_DETAIL,
    CLEAR_APARTMENT_DETAIL,
    GET_APARTMENT_LISTS
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){

        case GET_APARTMENT_LISTS:
             return {
                 ...state,
                 toBook:action.payload.articles,
                 toBookSize:action.payload.size
             }
         
            case GET_APARTMENT_CITYS_LIST:
            return { ...state, getCitys: action.payload }
            case GET_PRODUCTS_WOOD_LIST:
            return { ...state, getWoods: action.payload }
       
                case GET_APARTMENTS_DETAIL:
                 return {...state, apartmentDetail:action.payload }
                 case  CLEAR_APARTMENT_DETAIL:
                 return { ...state , apartmentDetail:action.payload}
        default:
            return state;
    }
}