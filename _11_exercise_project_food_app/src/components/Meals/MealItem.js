import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const priceFormatted = `$${price.toFixed(2)}`;

  const addToCart = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  return (
    <div className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormatted}</div>
      </div>

      <MealItemForm id={id} price={price} onAddToCart={addToCart} />
    </div>
  );
};

export default MealItem;
