import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { getProducts } from '../../api/products'

class ProductIndex extends Component {
  constructor () {
    super()

    this.state = {
      products: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    getProducts(user)
      .then(res => {
        this.setState({ products: res.data.products })
      })
      .then(() => {
        msgAlert({
          heading: 'Product Index Success',
          message: 'Check em out!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Product Index Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    if (!this.state.products) {
      return <p>Loading products...</p>
    } else if (this.state.products.length === 0) {
      return <p>No products exist in the database :(<br/>You should add one!</p>
    } else {
      return (
        <div>
          {this.state.products.map(prod => (
            <Fragment key={prod._id}>
              <h2>{prod.name}</h2>
              <p>{prod.description}</p>
              <p>${prod.price}</p>
              <Link to={`/products/${prod._id}`}>See More</Link>
            </Fragment>
          ))}
        </div>
      )
    }
  }
}

export default withRouter(ProductIndex)
