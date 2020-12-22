import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { createProduct } from '../../api/products'

class ProductCreate extends Component {
  constructor () {
    super()

    this.state = {
      product: {
        name: '',
        description: '',
        price: 0
      },
      createdId: null
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
      .then(res => {
        this.setState({ createdId: res.data.product._id })
      })
      .then(() => {
        msgAlert({
          heading: 'Product Create Success',
          message: 'Check out your new product!',
          variant: 'success'
        })
      })
      .then(() => this.history.push('/products'))
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
      <Fragment>
        <h2>Create Product</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Product name"
            value={this.state.product.name}
            onChange={this.handleInputChange}
            name="name"
          />
          <textarea
            placeholder="Product description"
            value={this.state.product.description}
            onChange={this.handleInputChange}
            name="description"
          ></textarea>
          <input
            placeholder="Product price"
            value={this.state.product.price}
            onChange={this.handleInputChange}
            name="price"
          />
          <button className="my-button" type="submit">Submit</button>
        </form>
      </Fragment>
    )
  }
}

export default withRouter(ProductCreate)
