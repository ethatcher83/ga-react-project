import { useState } from "react";
import {searchMeals} from "../services/mealsService";
import Meals from "./Meals";

const SearchPage = ({meals, setMeals, updateShoppingList}) => {

  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const meals = await searchMeals(input);
    if(meals) {
      setMeals(meals)
    }
    setInput('');
  }

  return (
    <>
      <main className="search-page">
        <form onSubmit={handleSubmit} className="search-form">
          <label htmlFor="input">
            <h2>Search for a recipe:</h2>
          </label>
          <input
            type="text"
            id="input"
            name="input"
            placeholder="Korma curry"
            value={input}
            onChange={(e) => { setInput(e.target.value); }}
          />
          <button type="submit">Search</button>
        </form>
      </main>
      <Meals meals={meals} updateShoppingList={updateShoppingList}></Meals>
    </>
  );
}

export default SearchPage;