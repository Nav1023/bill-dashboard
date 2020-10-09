import React, { useState } from "react";
import './index.css';

export default ({ type, data, toggleModal, submitHandle}) => {
  const [state, setstate] = useState({ amount: '', category: '', description: ''});

  const handleChange = event => {
    event.persist();
    setstate(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleBillSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    submitHandle(state, data);
  }

  return (
  <form className="bill-form" onSubmit={handleBillSubmit}>
   <p className='form-heading'>{`${type === 'create'? 'Add' : 'Edit'} Form`}</p>
      <div className="input-field-wrapper">
    <label>Amount: </label>
      <input onChange={handleChange} name='amount' className='input-field' type='number' placeholder='Enter Amount' />
    </div>
      <div className="input-field-wrapper">
    <label>Category: </label>
      <input onChange={handleChange} name='category' className='input-field' type='text' placeholder='Enter Category' />
    </div>
      <div className="input-field-wrapper">
    <label>Description: </label>
      <input onChange={handleChange} name='description' className='input-field' type='text' placeholder='Enter Description' />
    </div>
    <button type='submit' className='submit-btn'>Save</button>
    <button className="cancel-btn" onClick={toggleModal}>Cancel</button>
    </form>
  );
}
