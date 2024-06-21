import { Link } from "react-router-dom";

const Meals = ({meals}) => {
    return (
        <div className="meals-container">
            <ul className="meals-list">
                {meals.map((meal) => {
                    return (
                        <li key={meal.idMeal} className="meal-item">
                            <Link to={`/receipe/${meal.idMeal}`}>{meal.strMeal}</Link>
                            <picture>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                            </picture>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Meals;