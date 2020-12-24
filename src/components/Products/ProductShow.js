import React, { useState, useEffect, Fragment } from 'react'
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
      <Fragment>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <Link to={'/products'}>Back to products</Link>
        <Link to={`/update-product/${product._id}`}>Update product</Link>
      </Fragment>
    )
  }
}

export default withRouter(ProductShow)
