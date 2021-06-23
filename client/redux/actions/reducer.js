import {INCREMENT_PAGE} from './actionTypes';
import {DECREMENT_PAGE} from './actionTypes';

const State={
    number:1
}

const numberReducer=(state=State,action)=>{
    switch(action.type)
    {
        case INCREMENT_PAGE: return{
                
                number:state.number+action.payload
            }
        case DECREMENT_PAGE: return{
                    
                    number:state.number-action.payload
                }
        default: return state;
    }
}

export default numberReducer;