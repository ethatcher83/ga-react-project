import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMealById } from "../services/mealsService"
import IngredientList from "./IngredientList";

const Receipe = ({updateShoppingList}) => {
    const {mealId} = useParams();
    const [meal, setMeal] = useState();
    const [requestStatus, setRequestStatus] = useState('idle');;
    const [ingredients, setIngredients] = useState([])
    const ingredientList = [];

    useEffect(() => {
        searchMealById(mealId)
        .then((data) => {
            setMeal(data)
            for (let i = 1; i <= 30; i++) {
                const ingredient = data[`strIngredient${i}`];
                if (ingredient) {
                    ingredientList.push(ingredient)
                }
            }
            setIngredients([...ingredients, ingredientList])
            setRequestStatus('success');
        })
        .catch(() => {
            setRequestStatus('error');
            navigate('/error');
          });
    }, [mealId])

    return (
        <>
            <h1>Receipe</h1>
            {requestStatus === 'error' && <p>Something went wrong 🙃</p>}
            {requestStatus === 'idle' && <p>Loading ... ⏳</p>}
            {requestStatus === 'success' && (
                <>
                    <h1 id="receipeTitle">{meal.strMeal}</h1>
                    <div className="meal-details">
                        <picture>
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image-receipe" />
                        </picture>
                        <div className="instructions">
                            <h1 id="instructionsTitle">Instructions:</h1>
                            <p>{meal.strInstructions}</p>
                        </div>
                    </div>
                    <div className="ingredients-section">
                        <h1>Ingredients</h1>
                        <IngredientList ingredients={ingredients} updateShoppingList={updateShoppingList} />
                    </div>
                </>
            )}
        </>
    );
}

export default Receipe;