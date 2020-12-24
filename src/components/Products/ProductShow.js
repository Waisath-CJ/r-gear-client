import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { getProduct } from '../../api/products'

const ProductShow = props => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const { user, msgAlert, match } = props

    getProduct(match.params.prodId, user)
      .then(res => {
        console.log(res.data.product)
        setProduct(res.data.product)
      })
      .then(() => {
        msgAlert({
          heading: 'Product Show Success',
          message: 'Here\'s the product you were looking for!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Product Show Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }, [])

  if (!product) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={'/products'}>Back to products</Link>
          <Link to={`/update-product/${product._id}`}>Update product</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(ProductShow)
