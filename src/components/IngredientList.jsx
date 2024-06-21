import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, updateShoppingList }) => {
    return (
        <ul>
            {ingredients[0].map((ingredient, index) => (
                <Ingredient key={index} ingredient={ingredient} updateShoppingList={updateShoppingList} />
            ))}
        </ul>
    );
};

export default IngredientList;
