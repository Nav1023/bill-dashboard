import React, { useState } from "react";
import moment from "moment";
import * as uuid from "uuid";
import "./index.css";

export default ({ type, data, toggleModal, addBill, editBill }) => {
  const [state, setstate] = useState({
    amount: data.amount,
    category: data.category,
    description: data.description,
    id: data.id
  });
  const [amountError, setAmountError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const handleChange = event => {
    event.persist();
    setstate(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const validateForm = formData => {
    if (!formData.amount) {
      setAmountError(true);
    } else if (!formData.category) {
      setAmountError(false);
      setCategoryError(true);
      setDescriptionError(false);
    } else if (!formData.description) {
      setAmountError(false);
      setCategoryError(false);
      setDescriptionError(true);
    } else {
      setAmountError(false);
      setCategoryError(false);
      setDescriptionError(false);
      return true;
    }
  };
  const handleBillSubmit = event => {
    event.preventDefault();
    const isValid = validateForm(state);
    if (isValid) {
      if (type === "create") {
        const bill = {
          ...state,
          id: uuid.v4(),
          date: moment(new Date()).format("MM-DD-YYYY")
        };
        addBill(bill);
        toggleModal();
      } else if (type === "edit") {
        const bill = {
          ...state,
          date: moment(new Date()).format("MM-DD-YYYY")
        };
        editBill(bill);
        toggleModal();
      }
    }
  };

  return (
    <form className="bill-form" onSubmit={handleBillSubmit}>
      <p className="form-heading">{`${
        type === "create" ? "Add" : "Edit"
      } Form`}</p>
      <div className="input-field-wrapper">
        <label>Amount: </label>
        <input
          onChange={handleChange}
          value={state.amount}
          name="amount"
          className="input-field"
          type="number"
          placeholder="Enter Amount"
        />
        {amountError ? (
          <span style={{ color: "red" }}>Please Enter some value</span>
        ) : (
          ""
        )}
      </div>
      <div className="input-field-wrapper">
        <label>Category: </label>
        <input
          onChange={handleChange}
          value={state.category}
          name="category"
          className="input-field"
          type="text"
          placeholder="Enter Category"
        />
        {categoryError ? (
          <span style={{ color: "red" }}>Please Enter some value</span>
        ) : (
          ""
        )}
      </div>
      <div className="input-field-wrapper">
        <label>Description: </label>
        <input
          onChange={handleChange}
          value={state.description}
          name="description"
          className="input-field"
          type="text"
          placeholder="Enter Description"
        />
        {descriptionError ? (
          <span style={{ color: "red" }}>Please Enter some value</span>
        ) : (
          ""
        )}
      </div>
      <button type="submit" className="submit-btn">
        Save
      </button>
      <button className="cancel-btn" onClick={toggleModal}>
        Cancel
      </button>
    </form>
  );
};
