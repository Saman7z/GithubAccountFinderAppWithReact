import {REMOVE_ALERT, SET_ALERT} from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_ALERT:
            return{
                ...state,
                alert:{
                    display:true,
                    msg:action.msg,
                    color:action.color
                }
                
            }
        case REMOVE_ALERT:
            return {
                ...state,
                alert : null
            }    
        default:
            return state   
    }
}