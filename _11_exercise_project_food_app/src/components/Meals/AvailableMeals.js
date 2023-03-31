import DUMMY_MEALS from '../../data/dummy-meals';

import Card from '../UI/Card';
import MealItem from './MealItem';

import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <li key={meal.id}>
                <MealItem
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              </li>
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
