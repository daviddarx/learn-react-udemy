import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => {
  return value.trim().length === 0;
};

const isFiveChars = (value) => {
  return value.length === 5;
};

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const confirmOdrder = (e) => {
    e.preventDefault();

    const nameValid = !isEmpty(nameInput.current.value);
    const streetValid = !isEmpty(streetInput.current.value);
    const postalValid = isFiveChars(postalInput.current.value);
    const cityValid = !isEmpty(cityInput.current.value);

    setFormValidity({
      name: nameValid,
      street: streetValid,
      postal: postalValid,
      city: cityValid,
    });

    const isFormValid = nameValid && streetValid && postalValid && cityValid;

    if (!isFormValid) {
      return;
    }

    props.onSubmitOrder({
      name: nameInput.current.value,
      street: streetInput.current.value,
      postal: postalInput.current.value,
      city: cityInput.current.value,
    });
  };

  return (
    <form onSubmit={confirmOdrder}>
      <div className={`${classes.control} ${!formValidity.name ? classes.invalid : ''}`}>
        <label htmlFor='name'>Name: </label>
        <input ref={nameInput} id='name' type='text' />
        {!formValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${!formValidity.street ? classes.invalid : ''}`}>
        <label htmlFor='street'>Street: </label>
        <input ref={streetInput} id='street' type='text' />
        {!formValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={`${classes.control} ${!formValidity.postal ? classes.invalid : ''}`}>
        <label htmlFor='postal'>Postal Code: </label>
        <input ref={postalInput} id='postal' type='text' />
        {!formValidity.postal && <p>Please enter a valid postal (5 numbers)</p>}
      </div>
      <div className={`${classes.control} ${!formValidity.city ? classes.invalid : ''}`}>
        <label htmlFor='city'>City: </label>
        <input ref={cityInput} id='city' type='text' />
        {!formValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit' className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
