import { useCallback, useEffect, useState } from 'react'
import {
  getIngredients,
  type MealDBMeal,
  type MealDBRandomResponse,
} from '../types/mealdb'
import './RandomRecipeSection.css'

const RANDOM_RECIPE_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

async function fetchRandomRecipe(): Promise<MealDBMeal> {
  const response = await fetch(RANDOM_RECIPE_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch recipe')
  }

  const data: MealDBRandomResponse = await response.json()
  const meal = data.meals?.[0]

  if (!meal) {
    throw new Error('No recipe returned')
  }

  return meal
}

function RandomRecipeSection() {
  const [recipe, setRecipe] = useState<MealDBMeal | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadRecipe = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const meal = await fetchRandomRecipe()
      setRecipe(meal)
    } catch {
      setError('Could not load a random recipe. Please try again.')
      setRecipe(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadRecipe()
  }, [loadRecipe])

  const ingredients = recipe ? getIngredients(recipe) : []
  const tags = recipe?.strTags?.split(',').map((tag) => tag.trim()).filter(Boolean) ?? []

  return (
    <section className="random-recipe" aria-live="polite">
      <div className="random-recipe__header">
        {/* <p className="random-recipe__eyebrow">Random recipe</p> */}
        <h1 className="random-recipe__title">Discover New Recipe</h1>
        <p className="random-recipe__subtitle">
          Shuffle recipes until something catches your eye.
        </p>
      </div>

      <div className="random-recipe__card">
        {loading && (
          <div className="random-recipe__loading">
            <div className="random-recipe__skeleton random-recipe__skeleton--image" />
            <div className="random-recipe__skeleton-body">
              <div className="random-recipe__skeleton random-recipe__skeleton--line" />
              <div className="random-recipe__skeleton random-recipe__skeleton--line random-recipe__skeleton--short" />
              <div className="random-recipe__skeleton random-recipe__skeleton--line" />
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="random-recipe__error">
            <p>{error}</p>
            <button className="btn btn--primary" type="button" onClick={loadRecipe}>
              Try again
            </button>
          </div>
        )}

        {!loading && recipe && (
          <div className="random-recipe__content">
            <div className="random-recipe__image-wrap">
              <img
                className="random-recipe__image"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
            </div>

            <div className="random-recipe__details">
              <div className="random-recipe__meta">
                <span className="random-recipe__tag">{recipe.strCategory}</span>
                <span className="random-recipe__tag">{recipe.strArea}</span>
                {tags.map((tag) => (
                  <span className="random-recipe__tag random-recipe__tag--muted" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="random-recipe__name">{recipe.strMeal}</h2>

              <p className="random-recipe__ingredient-count">
                {ingredients.length} ingredients
              </p>

              <div className="random-recipe__ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {ingredients.map(({ ingredient, measure }) => (
                    <li key={ingredient}>
                      <span className="random-recipe__measure">{measure}</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="random-recipe__instructions">
                <h3>Instructions</h3>
                <p>{recipe.strInstructions}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {!loading && recipe && (
        <div className="random-recipe__actions">
          <button
            className="btn btn--primary btn--lg"
            type="button"
            onClick={loadRecipe}
          >
            Shuffle Recipe
          </button>
          {recipe.strSource && (
            <a
              className="btn btn--outline btn--lg"
              href={recipe.strSource}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          )}
          {recipe.strYoutube && (
            <a
              className="btn btn--youtube btn--lg"
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          )}
        </div>
      )}
    </section>
  )
}

export default RandomRecipeSection
