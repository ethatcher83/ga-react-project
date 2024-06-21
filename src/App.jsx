import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import NotFound from "./components/NotFound";
import Receipe from "./components/Receipe";

const App = () => {
  const [shoppingList, setShoppingList] = useState([])
  const [meals, setMeals] = useState([])

  const updateShoppingList = (item) => {
    alert(`${item} Added to shopping list`)
    setShoppingList([...shoppingList, item])
  }

  const removeFromShoppingList = (item) => {
    setShoppingList(shoppingList.filter((ingredient) => ingredient !== item))
  }


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<SearchPage shoppingList={shoppingList} updateShoppingList={updateShoppingList}
          meals={meals} setMeals={setMeals}/>}/>
        <Route path='/shopping-list' element={<ShoppingList shoppingList={shoppingList} updateShoppingList={updateShoppingList}
          removeFromShoppingList={removeFromShoppingList}/>}/>
        <Route path='/receipe/:mealId' element={<Receipe updateShoppingList={updateShoppingList}/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
};

export default App;
