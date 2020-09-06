import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER } from "../types";

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case SEARCH_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false

            }     
        case CLEAR_USERS:
            return{
                ...state,
                loading:false,
                users:action.payload
            }    
        case GET_REPOS:
            return{
                ...state,
                repos:action.payload,
                loading:false
            }
        case GET_USER:
            return {
                ...state,
                theUser:action.payload,
                loading:false
            }    
        default:
            return state
    }
};
