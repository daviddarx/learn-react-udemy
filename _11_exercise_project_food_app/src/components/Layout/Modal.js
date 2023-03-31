import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={classes.modal}>{children}</div>
          <div className={classes.backdrop} onClick={onClose}></div>
        </Fragment>,
        document.getElementById('overlays'),
      )}
    </Fragment>
  );
};

export default Modal;
