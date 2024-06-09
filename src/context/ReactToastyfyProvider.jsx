import 'react-toastify/dist/ReactToastify.css';
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

const ReactToastifyProvider = ({ children }) => {
  return (
    <Fragment>
      <ToastContainer />
      {children}
    </Fragment>
  )
};

export default ReactToastifyProvider;
