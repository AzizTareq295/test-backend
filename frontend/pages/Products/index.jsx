import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { storeProduct } from '../../actions'
import styles from './products.module.scss'


export default function Products(){

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [imageType, setImageType] = useState('')

  const dispatch = useDispatch()

  const fileHandle = (e) => {
    let fileReader = new FileReader();
    // setImage(URL.createObjectURL(e.target.files[0]))
    let type = e.target.files[0].type.split('/')
    setImageType(type[1])

    fileReader.readAsDataURL(e.target.files[0])

    fileReader.onload = e => {
      setImage(e.target.result)
    }
  }


  const submitForm = () => {
    const data = {
      name, quantity, price, description, image, imageType
    }

    dispatch(storeProduct(data))

  }

  return (
    <div className="Product-form">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8">
            <div className="productAddForm">
              <div className="formHeading">
                <h2 className="text-center my-5">Product Add Form</h2>
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" value={name} onChange={ e=> setName(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" placeholder="Enter Quantity" value={quantity} onChange={ e=> setQuantity(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Price" value={price} onChange={ e=> setPrice(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" type="text" placeholder="Description" value={description} onChange={ e=> setDescription(e.target.value) }  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="Image" onChange={fileHandle} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={submitForm}>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
