import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBill, editBill, deleteBill } from "../../redux/actions/BillActions";
import BillCard from "../BillCard";
import Modal from "../Modal";
import "./index.css";
import BillForm from "../BillForm";
import MonthlyChart from "../MonthlyChart";

const BillList = props => {
  const { billData } = props;
  const [isBillModalVisible, setisBillModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const [filterCategory, setFilterCategory] = useState("none");
  const [modalType, setModalType] = useState("create");
  const categoryList = billData
    .map(bill => bill.category)
    .filter((x, i, a) => a.indexOf(x) === i);
  categoryList.unshift("none");

  console.log("categoryList", categoryList);
  console.log("props", props);

  const toggleModal = fieldName => () => {
    if (fieldName === "isBillModalVisible") {
      setisBillModalVisible(!isBillModalVisible);
    }
    setSelectedRow({});
    setModalType("create");
  };

  const handleSelectedRow = id => {
    let currentRow = billData.filter(bill => bill.id === id);
    setSelectedRow(currentRow[0]);
  };

  const setFilter = option => {
    console.log("option", option.target.value);
    setFilterCategory(option.target.value);
  };

  const handleEdit = () => {
    setisBillModalVisible(!isBillModalVisible);
    setModalType("edit");
  };

  let billList = [...billData];
  //if Filter is On
  if (filterCategory !== "none"){
    billList =  billData 
    .filter(bill => {
        if (bill.category === filterCategory) {
          return bill;
        }
    });
  } else if(monthlyBudget) {
    billList.sort( (firstBill, secondBill) => {
      const x = Number(firstBill.amount);
      const y =  Number(secondBill.amount);  
      return ((x > y) ? -1 : ((x < y) ? 1 : 0)); 
    });
    let currentBillAmount = 0;
    billList = billList.filter((bill) => {
        if((currentBillAmount + Number(bill.amount)) <= monthlyBudget ){
          currentBillAmount += Number(bill.amount);
          console.log(currentBillAmount);
          return bill;
        }
    })
    console.log(billList);
  }
  return (
    <div className="bill-list-wrapper">
      <p className="heading">Your Bills</p>
      <div className="bill-list-header">
          <button
            className="add-btn"
            onClick={toggleModal("isBillModalVisible")}
          >
            Add Bill
          </button>
        <div>
          <select onChange={setFilter}>
            {categoryList.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bill-list-container">
        {billData.length > 0 ? (
            billList.map(bill => (
              <BillCard
                data={bill}
                handlePos={handleSelectedRow}
                handleDelete={props.deleteBill}
                handleEdit={handleEdit}
              />
            ))
        ) : (
          <p>No Bills</p>
        )}
      </div>
      <Modal
        isOpen={isBillModalVisible}
        toggleModal={toggleModal('isBillModalVisible')}
      >
          <BillForm
            type={modalType}
            data={selectedRow}
            toggleModal={toggleModal("isBillModalVisible")}
            addBill={props.addBill}
            editBill={props.editBill}
          />
      </Modal>
    </div>
  );
};

BillList.propTypes = {
  props: PropTypes
};

const mapStateToProps = state => {
  return {
    billData: state.BillState.billData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addBill,
      editBill,
      deleteBill
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BillList);
