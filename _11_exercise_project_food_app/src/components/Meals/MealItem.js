import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
  const priceFormatted = `$${price.toFixed(2)}`;

  return (
    <div className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormatted}</div>
      </div>

      <MealItemForm id={id} />
    </div>
  );
};

export default MealItem;
