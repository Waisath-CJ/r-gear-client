import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { deleteProduct } from '../../api/products'
import messages from '../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ConfirmDeleteModal = props => {
  return (
    <Modal {...props} aria-labelledby="confirm-delete-modal">
      <Modal.Header closeButton>
        <Modal.Title id="confirm-delete-modal">
          Confirm Delete Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this product?
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-dark' onClick={props.onHide}>Close</Button>
        <Button variant='outline-danger' onClick={props.deleteProduct}>Delete Product</Button>
      </Modal.Footer>
    </Modal>
  )
}

const ProductDelete = props => {
  const [modalShow, setModalShow] = useState(false)

  const onDeleteProduct = event => {
    event.preventDefault()
    const { msgAlert, history, user, match } = props

    deleteProduct(match.params.prodId, user)
      .then(() => msgAlert({
        heading: 'Product Successfully Deleted',
        message: messages.deleteProductSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/products'))
      .catch(error => msgAlert({
        heading: 'Delete Product Failed with error: ' + error.message,
        message: messages.deleteProductFailure,
        variant: 'danger'
      }))
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <Button variant="outline-danger" onClick={() => setModalShow(true)} block>Delete Product</Button>

        <ConfirmDeleteModal show={modalShow} onHide={() => setModalShow(false)} deleteProduct={onDeleteProduct} />
      </div>
    </div>
  )
}

export default withRouter(ProductDelete)
