import {INCREMENT_PAGE,DECREMENT_PAGE} from './actionTypes';


export const incrementPage=(number=1)=>{
    return {
        type:INCREMENT_PAGE,
        payload:number
        
    }
}

export const decrementPage=(number=1)=>{
    return{
        type:DECREMENT_PAGE,
        payload:number
        
    }
}