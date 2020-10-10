import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BillCard from "../BillCard";
import "./index.css";

const MinimumBills = props => {
  const { billData } = props;
  const [showMinBill, setShowMinBill] = useState(false);
  const [monthlyBudget, setMonthlyBudget] = useState(0);

  let billList = [...billData];
  //if Filter is On
  if (showMinBill && monthlyBudget) {
    billList.sort((firstBill, secondBill) => {
      const x = Number(firstBill.amount);
      const y = Number(secondBill.amount);
      return x > y ? -1 : x < y ? 1 : 0;
    });
    let currentBillAmount = 0;
    billList = billList.filter(bill => {
      if (currentBillAmount + Number(bill.amount) <= monthlyBudget) {
        currentBillAmount += Number(bill.amount);
        return bill;
      }
    });
  }
  return (
    <div className="bill-list-wrapper">
      <p className="heading">Minimum Bills</p>
      <div className="bill-list-header">
        <div>
          <input
            onChange={e => {
              setMonthlyBudget(e.target.value);
              setShowMinBill(false);
            }}
            name="budget"
            className="input-field"
            type="text"
            value={monthlyBudget}
            placeholder="Enter Budget"
          />
          <button className="set-btn" onClick={() => setShowMinBill(true)}>
            Set
          </button>
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            setShowMinBill(false);
            setMonthlyBudget(0);
          }}
        >
          Reset
        </button>
      </div>

      <div className="bill-list-container">
        {billData.length > 0 ? (
          billList.length > 0 ? (
            billList.map(bill => (
              <BillCard data={bill} showCardActions={false} />
            ))
          ) : (
            <p>No Minimum Bills</p>
          )
        ) : (
          <p>No Bills</p>
        )}
      </div>
    </div>
  );
};

MinimumBills.propTypes = {
  props: PropTypes
};

const mapStateToProps = state => {
  return {
    billData: state.BillState.billData
  };
};

export default connect(mapStateToProps)(MinimumBills);
