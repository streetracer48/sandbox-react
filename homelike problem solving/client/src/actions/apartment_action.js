import axios from 'axios'
import {
  
    GET_APARTMENT_CITYS_LIST,
    GET_PRODUCTS_WOOD_LIST,
    GET_APARTMENT_LISTS,
    GET_APARTMENTS_DETAIL,
    CLEAR_APARTMENT_DETAIL
} from './types'





export function getCitysList(){
    const request = axios.get(`api/apartment/citys`,)
                .then(response =>response.data);

    return {
        type: GET_APARTMENT_CITYS_LIST,
        payload: request
    }
}

export function getProductsWoodList(){
    const request = axios.get(`/api/product/woods`,)
                .then(response =>response.data);

    return {
        type: GET_PRODUCTS_WOOD_LIST,
        payload: request
    }
}


export function getApartmentsList(skip, limit,filters =[], previewsState =[]){

     const data = {
         limit,
         skip,
         filters
     }
    const request = axios.post(`/api/apartment/home`, data)
                .then(response =>{
                    let newState = [
                        ...previewsState,
                        ...response.data.articles
                    ]


                     return {
                         size:response.data.size,
                         articles:newState
                     }
                });

    return {
        type: GET_APARTMENT_LISTS,
        payload: request
    }
}




export function getApartmentsDetails(id) {

    const  request = axios.get(`/api/apartment/by_id?id=${id}&type:single`)
    .then(response => {
        return response.data[0]
    });

    return { 
        type:GET_APARTMENTS_DETAIL,
        payload:request
    }
    
}

export function clearApartmentDetail() {

    return { 
        type:CLEAR_APARTMENT_DETAIL,
        payload:''
    }
    
}


    

