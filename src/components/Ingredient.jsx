const Ingredient = ({ingredient, updateShoppingList, shoppingListFlag, removeFromShoppingList}) => {
  
  return (
    <li className="ingredient-item">
      {ingredient}
      {shoppingListFlag ? (
        <button type="submit" onClick={() => removeFromShoppingList(ingredient)} className="remove-button">
          Remove from shopping list
        </button>
      ) : (
        <button type="submit" onClick={() => updateShoppingList(ingredient)} className="add-button">
          Add to shopping list
        </button>
      )}
    </li>
  );
};

export default Ingredient;