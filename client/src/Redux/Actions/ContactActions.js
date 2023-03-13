import { GETCONTACTS, GETONECONTACTS } from "../Types/ContactTypes"
import axios from 'axios'

export const getContacts=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/api/contact/get")
        dispatch(
            {
                type : GETCONTACTS,
                payload : res.data.contacts
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addContact=(newUser,navigate)=>async(dispatch)=>{
    try {
        await axios.post("/api/contact/add",newUser)
        dispatch(getContacts())
        navigate('/ListContact')
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/contact/getOneContact/${id}`)
        dispatch(
            {
                type : GETONECONTACTS,
                payload : res.data.contact
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(edUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/Update/${id}`,edUser)
        dispatch(getContacts())
        navigate('/ListContact')
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`api/contact/deleteContact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}
 