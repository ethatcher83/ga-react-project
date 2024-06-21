const BASE_URL = 'https://themealdb.com/api/json/v1/1'

const searchMeals = async (input) => {
    try {
        const queryString = `/search.php?s=${input}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json()
        return data.meals;
    } catch (error) {
        console.log({error})
    }
}

const searchMealById = async (id) => {
    try {
        const queryString = `/lookup.php?i=${id}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json()
        return data.meals[0];
    } catch (error) {
        console.log({error})
    }
}

export {searchMeals, searchMealById };