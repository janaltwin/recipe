export type MealDBMeal = {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string | null
  strYoutube: string | null
  strSource: string | null
  [key: string]: string | null | undefined
}

export type MealDBRandomResponse = {
  meals: MealDBMeal[] | null
}

export type RecipeIngredient = {
  ingredient: string
  measure: string
}

export function getIngredients(meal: MealDBMeal): RecipeIngredient[] {
  const ingredients: RecipeIngredient[] = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]?.trim()
    if (!ingredient) continue

    ingredients.push({
      ingredient,
      measure: meal[`strMeasure${i}`]?.trim() ?? '',
    })
  }

  return ingredients
}
