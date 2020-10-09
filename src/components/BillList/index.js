import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  bindActionCreators
} from 'redux';
import { addBill, editBill, deleteBill} from '../../redux/actions/BillActions';
import BillCard from '../BillCard';
import Modal from '../Modal';
import './index.css';
import BillForm from '../BillForm';

const BillList = (props) => {
   const {
    billData,
    } = props;
  const [billList, setBillList] = useState(billData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const categoryList = billList.map(bill => bill.category).filter((x, i, a) => a.indexOf(x) === i);

  console.log('categoryList', categoryList);
  console.log('props', props);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <div className="bill-list-wrapper">
      <div className="bill-list-header">
        <button className="add-btn" onClick={toggleModal}>Add Bill</button>
        <p className="heading">Your Bills</p>
        <select>
          {categoryList.map(category => <option value={category}>{category}</option>)}
        </select>
      </div>

      <div className="bill-list-container">
        {billList.length > 0 ?
          billList.map(bill => <BillCard data={bill} />)
          : <p>No Bills</p>}
      </div>
      <Modal isOpen={isModalVisible}><BillForm type={'create'} data={billList} toggleModal={toggleModal} submitHandle={addBill}/></Modal>
    </div>
  )
}

BillList.propTypes = {
  props: PropTypes
}

const mapStateToProps = (state) => {
  return{
      billData: state.BillState.billData
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      addBill,
      editBill,
      deleteBill,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BillList);