import {  useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addContact } from "../Redux/Actions/ContactActions"
import { Form,Button} from "react-bootstrap"

const AddContact=()=>{
    const [name,setName] = useState('')
    const [age,setage] = useState()
    const [email,setEmail] = useState('')
    const [imageP,setImageP] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAdd=(a)=>{
        a.preventDefault()
        dispatch(addContact({name,age,email,imageP},navigate))
    }
    return(
        <div>
          <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="string" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>age</Form.Label>
        <Form.Control onChange={(e)=>setage(e.target.value)} type="number" placeholder="Enter age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control onChange={(e)=>setImageP(e.target.value)} type="email" placeholder="Enter email " />
      </Form.Group>
      <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit"> Submit</Button>
     
    </Form>
        </div>
    )
}

export default AddContact