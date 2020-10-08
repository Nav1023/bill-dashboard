import React from 'react'
import './index.css'

function index({data}) {
  const{
    id,
    description,
    amount,
    date,
    category,
  } = data;
  return (
    <div key={id} className= "bill-item">
      <div className="row-box">
        <p className="bill-category">{category}</p>
        <p className="bill-amount">{amount}</p>
      </div>
      <p className="bill-description">{description}</p>
      <p className="bill-date">{date}</p>
    </div>
  )
}

export default index
