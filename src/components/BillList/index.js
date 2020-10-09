import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  bindActionCreators
} from 'redux';
import { addBill, editBill, deleteBill } from '../../redux/actions/BillActions';
import BillCard from '../BillCard';
import Modal from '../Modal';
import './index.css';
import BillForm from '../BillForm';

const BillList = (props) => {
  const {
    billData,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [filterCategory, setFilterCategory] = useState('none');
  const [modalType, setModalType] = useState('create');
  const categoryList = billData.map(bill => bill.category).filter((x, i, a) => a.indexOf(x) === i);
  categoryList.unshift('none');

  console.log('categoryList', categoryList);
  console.log('props', props);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedRow({});
    setModalType('create');
  }
  
  const handleSelectedRow = (id) => {
    let currentRow = billData.filter(bill => bill.id === id);
    setSelectedRow(currentRow[0]);
  }

  const setFilter = (option) => {
    console.log("option", option.target.value);
    setFilterCategory(option.target.value);
  }

  const handleEdit = () => {
    setIsModalVisible(!isModalVisible);
    setModalType('edit');
  }
  const handleDelete = () => {
    console.log("delete");
  }

  return (
    <div className="bill-list-wrapper">
      <div className="bill-list-header">
        <button className="add-btn" onClick={toggleModal}>Add Bill</button>
        <p className="heading">Your Bills</p>
        <div>
          <select onChange={setFilter}>
            {categoryList.map(category => <option value={category}>{category}</option>)}
          </select>
        </div>
      </div>

      <div className="bill-list-container">
        {
          billData.length > 0 ?
            billData.filter((bill) => {
              if (filterCategory !== 'none') {
                if (bill.category === filterCategory) {
                  return bill;
                }
              }
              else {
                return bill;
              }
            }).map(bill => <BillCard data={bill} handlePos={handleSelectedRow} handleDelete={handleDelete} handleEdit={handleEdit} />)
            : <p>No Bills</p>
        }
      </div>
      <Modal isOpen={isModalVisible}><BillForm type={modalType} data={selectedRow} toggleModal={toggleModal} addBill={props.addBill} editBill={props.editBill} /></Modal>
    </div>
  )
}

BillList.propTypes = {
  props: PropTypes
}

const mapStateToProps = (state) => {
  return {
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