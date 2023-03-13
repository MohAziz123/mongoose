import { GETCONTACTS, GETONECONTACTS } from "../Types/ContactTypes"


const initialState={
    contacts : [],
    contact : {}
}


const ContactReducer=(state = initialState, action)=>{
    switch (action.type) {
        case GETCONTACTS : return {...state,contacts : action.payload}
        case GETONECONTACTS : return {...state,contact : action.payload}
        default: return state
    }
}
export default ContactReducer