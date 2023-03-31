import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Modal = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={classes.modal}>{children}</div>
          <div className={classes.backdrop}></div>
        </Fragment>,
        document.getElementById('overlays'),
      )}
    </Fragment>
  );
};

export default Modal;
