import React from 'react'
import './index.css'

function index({ data, handleEdit, handlePos, handleDelete, showCardActions = true }) {
  const {
    id,
    description,
    amount,
    date,
    category,
  } = data;
  const onEditClick = () => {
    handlePos(id);
    handleEdit();
  }

  return (
    <div key={id} className="bill-item">
      <div className="row-box">
        <p className="bill-category">Category: {category}</p>
        <p className="bill-amount">Bill Amount: {amount}</p>
      </div>
      <p className="bill-description">Description: {description}</p>
      <p className="bill-date">Date: {date}</p>
      {showCardActions ? <div className="btn-row">
        <button className="edit-btn" onClick={onEditClick}>Edit</button>
        <button className="delete-btn" onClick={() => handleDelete(id)}>Delete</button>
      </div> : null}
    </div>
  )
}

export default index
