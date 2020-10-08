import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BillCard from '../BillCard';
import Modal from '../Modal';
import './index.css';
import BillForm from '../BillForm';
const data = [
  {
    "id": 1,
    "description": "Dominoes",
    "category": "FoodNDining",
    "amount": "430",
    "date": "01-02-2020"
  },
  {
    "id": 2,
    "description": "Car wash",
    "category": "utility",
    "amount": "500",
    "date": "01-06-2020"
  },
  {
    "id": 3,
    "description": "Amazon",
    "category": "shopping",
    "amount": "2030",
    "date": "01-07-2020"
  },
  {
    "id": 4,
    "description": "House rent",
    "category": "Food & Dining",
    "amount": "35900",
    "date": "01-03-2020"
  },
  {
    "id": 5,
    "description": "Tuition", "category": "education", "amount": "2200",
    "date": "01-12-2020"
  },
  {
    "id": 6,
    "description": "Laundry", "category": "Personal Care", "amount": "320",
    "date": "01-14-2020"
  },
  {
    "id": 7,
    "description": "Vacation", "category": "Travel",
    "amount": "3430",
    "date": "01-18-2020"
  }
];

export default () => {

  const [billList, setBillList] = useState(data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const categoryList = billList.map(bill => bill.category).filter((x, i, a) => a.indexOf(x) === i);

  console.log('categoryList', categoryList);

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
      <Modal isOpen={isModalVisible}><BillForm type={'create'} data={null} toggleModal={toggleModal}/></Modal>
    </div>
  )
}

// index.propTypes = {
//   prop: PropTypes
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)
