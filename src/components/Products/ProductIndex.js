import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
        <div className="row">
            {this.state.products.map(prod => (
              <div className='col-sm-5 col-md-5 mx-auto mt-5'>
                <Card key={prod._id}>
                  <Card.Header as="h5">{prod.name}</Card.Header>
                  <Card.Body>
                    <Card.Title>${prod.price}</Card.Title>
                    <Card.Text>{prod.description}</Card.Text>
                    <Button className='my-button' onClick={() => this.props.history.push(`/products/${prod._id}`)}>More Details</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      )
    }
  }
}

export default withRouter(ProductIndex)
