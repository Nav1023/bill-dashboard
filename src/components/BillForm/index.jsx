import React, { useState } from "react";
import moment from 'moment';
import * as uuid from 'uuid';
import './index.css';

export default ({ type, data, toggleModal, addBill, editBill}) => {
  const [state, setstate] = useState({ amount: data.amount, category: data.category, description: data.description, id: data.id});

  console.log("data", data);
  const handleChange = event => {
    event.persist();
    setstate(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleBillSubmit = (event) => {
    event.preventDefault();
    console.log('state', state);
    if(type === 'create'){
      const bill = { 
          ...state,
          id: uuid.v4(),
          date: moment(new Date()).format('MM-DD-YYYY')
      };
      addBill(bill);
    }
   else{
        const bill = { 
          ...state,
          date: moment(new Date()).format('MM-DD-YYYY')
      };
      editBill(bill);
    }
  }

  return (
  <form className="bill-form" onSubmit={handleBillSubmit}>
   <p className='form-heading'>{`${type === 'create'? 'Add' : 'Edit'} Form`}</p>
      <div className="input-field-wrapper">
    <label>Amount: </label>
      <input onChange={handleChange} value={state.amount} name='amount' className='input-field' type='number' placeholder='Enter Amount' />
    </div>
      <div className="input-field-wrapper">
    <label>Category: </label>
      <input onChange={handleChange} value={state.category} name='category' className='input-field' type='text' placeholder='Enter Category' />
    </div>
      <div className="input-field-wrapper">
    <label>Description: </label>
      <input onChange={handleChange} value={state.description} name='description' className='input-field' type='text' placeholder='Enter Description' />
    </div>
    <button type='submit' className='submit-btn'>Save</button>
    <button className="cancel-btn" onClick={toggleModal}>Cancel</button>
    </form>
  );
}
