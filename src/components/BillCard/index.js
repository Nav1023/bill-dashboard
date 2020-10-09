import React from 'react'
import './index.css'

function index({ data, handleEdit, handlePos, handleDelete }) {
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
        <p className="bill-category">{category}</p>
        <p className="bill-amount">{amount}</p>
      </div>
      <p className="bill-description">{description}</p>
      <p className="bill-date">{date}</p>
      <div className="btn-row">
        <button className="edit-btn" onClick={onEditClick}>Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default index
