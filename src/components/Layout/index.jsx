import React, { Component } from "react";
import PropTypes from "prop-types";
// import { connect } from 'react-redux'

const index = ({ children }) => {
  return <div>{children}</div>;
};

index.propTypes = {
  prop: PropTypes
};

export default index;
