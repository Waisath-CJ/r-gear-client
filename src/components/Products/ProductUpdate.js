import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { getProduct, updateProduct } from '../../api/products'
import { withRouter } from 'react-router-dom'

const ProductUpdate = props => {
  const [product, setProduct] = useState({ name: '', description: '', price: 0 })

  useEffect(() => {
    const { user, match, msgAlert } = props

    getProduct(match.params.prodId, user)
      .then(res => {
        setProduct(res.data.product)
      })
      .catch(err => {
        msgAlert({
          heading: 'Product Show Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }, [])

  const handleInputChange = e => {
    const updatedField = {
      [e.target.name]: e.target.value
    }
    setProduct(oldProduct => {
      const updatedData = { ...oldProduct, ...updatedField }
      return updatedData
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { user, msgAlert, history } = props

    updateProduct(product, user)
      .then(() => {
        msgAlert({
          heading: 'Product Create Success',
          message: 'Check out your new product!',
          variant: 'success'
        })
      })
      .then(() => history.push('/products'))
      .catch(err => {
        msgAlert({
          heading: 'Product Create Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h2>Create Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Product name"
              value={product.name}
              onChange={handleInputChange}
              name="name"
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Product description"
              value={product.description}
              onChange={handleInputChange}
              name="description"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              placeholder="Product price"
              value={product.price}
              onChange={handleInputChange}
              name="price"
              type="number"
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Button className="my-button" type="submit">Update Product</Button>
          <Button variant="outline-dark" onClick={() => props.history.push(`/products/${product._id}`)}>Cancel</Button>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(ProductUpdate)
