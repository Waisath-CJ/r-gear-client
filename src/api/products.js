import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE Product
// Creates a product
export const createProduct = (prodInfo, user) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/products`,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      product: {
        name: prodInfo.email,
        description: prodInfo.password,
        price: prodInfo.passwordConfirmation,
        owner: user._id
      }
    }
  })
}

// GET Products
// Gets all the products
export const getProducts = () => {
  return axios({
    url: `${apiUrl}/products`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

// GET Product
// Gets a single product
export const getProduct = prodId => {
  return axios({
    url: `${apiUrl}/products/${prodId}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

// UPDATE Product
// Updates a single product
export const updateProduct = (prodInfo, user) => {
  return axios({
    url: `${apiUrl}/products/${prodId}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      product: {
        name: prodInfo.email,
        description: prodInfo.password,
        price: prodInfo.passwordConfirmation
      }
    }
  })
}

// DELETE Product
// Deletes a single product
export const deleteProduct = prodId => {
  return axios({
    url: `${apiUrl}/products/${prodId}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}