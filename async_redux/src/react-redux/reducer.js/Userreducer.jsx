import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../type"

const initialStates={
    loading:false,
    users:[],
    error:"",
}

export const UserReducer=(state=initialStates,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {...state,loading:true}
        case FETCH_USER_SUCCESS:
            return {...state,loading:false,users:action.payload,error:""}
        case FETCH_USER_FAILURE:
            return {...state,loading:false,users:[],error:action.payload}
    default :
    return state
          

    }

}