import { Card ,Button } from "react-bootstrap"

import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteContact } from "../Redux/Actions/ContactActions"

const CardContact=({el})=>{
    const dispatch = useDispatch()
    return(
        <div className="photo">
           <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.imageP} />
        <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.age}</Card.Text>
        <Card.Title>{el.email}</Card.Title>
        {/* /editcontact/:id */}
        <Link to={`/editcontact/${el._id}`}>Edit</Link>
        <Button onClick={()=> dispatch(deleteContact(el._id))} variant='danger'>Delete</Button>
      </Card.Body>
    </Card>
        </div>
    )
}
export default CardContact