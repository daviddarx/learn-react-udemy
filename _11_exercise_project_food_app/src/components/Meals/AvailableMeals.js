import DUMMY_MEALS from '../../data/dummy-meals';

import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return (
            <li key={meal.id}>
              {meal.name} {meal.description} {meal.price}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
