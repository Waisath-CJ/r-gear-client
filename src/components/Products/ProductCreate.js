import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createProduct } from '../../api/products'

class ProductCreate extends Component {
  constructor () {
    super()

    this.state = {
      product: {
        name: '',
        description: '',
        price: 0
      }
    }
  }

  handleInputChange = e => {
    const updatedField = {
      [e.target.name]: e.target.value
    }
    this.setState(prevState => {
      const updatedData = { ...prevState.product, ...updatedField }
      return { product: updatedData }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { user, msgAlert } = this.props

    createProduct(this.state.product, user)
      .then(() => {
        msgAlert({
          heading: 'Product Create Success',
          message: 'Check out your new product!',
          variant: 'success'
        })
      })
      .then(() => this.props.history.push('/products'))
      .catch(err => {
        msgAlert({
          heading: 'Product Create Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h2>Create Product</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Product name"
                value={this.state.product.name}
                onChange={this.handleInputChange}
                name="name"
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Product description"
                value={this.state.product.description}
                onChange={this.handleInputChange}
                name="description"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="Product price"
                value={this.state.product.price}
                onChange={this.handleInputChange}
                name="price"
                type="number"
                min={0}
                step={0.01}
              />
            </Form.Group>
            <Button className="my-button" type="submit">Add Product</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(ProductCreate)
