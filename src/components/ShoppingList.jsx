import Ingredient from "./Ingredient";

const ShoppingList = ({shoppingList, updateShoppingList, removeFromShoppingList}) => {
    const shoppingListFlag = true;

    return (
        <div>
        <h1>Ingredients</h1>
        <button onClick={() => print()} className="print-button">Print</button>
        {shoppingList.length === 0 ? (
            <p id="noItems">No items in shopping list</p>
        ) : (
            <ul>
                {shoppingList.map((ingredient, idx) => {
                    return ( 
                        <Ingredient
                            key={idx}
                            ingredient={ingredient}
                            updateShoppingList={updateShoppingList}
                            shoppingListFlag={shoppingListFlag}
                            removeFromShoppingList={removeFromShoppingList}
                        />
                    )
                })}
            </ul>
        )}
    </div>
    )
}

export default ShoppingList;
