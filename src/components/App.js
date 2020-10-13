import React, { useState } from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbsp'
        }
      ]
    }  
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeList 
      recipes={recipes} 
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Salted Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Salt chicken\n2. Cook chicken\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbsp'
      }
    ]
  },
  {
    id: 2,
    name: 'Salt & Pepper Pork',
    servings: 4,
    cookTime: '2:45',
    instructions: "1. Salt and pepper pork\n2. Cook pork\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbsp'
      },
      {
        id: 3,
        name: 'Pepper',
        amount: '1 Tbsp'
      }
    ]
  },
]

export default App;
