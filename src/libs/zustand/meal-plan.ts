type MealState = {
	slug: string
	title: string
}

export type MealPlanState = {
	daysAmount: number
	meals: MealState[]
	mandatoryMeals: Omit<MealState, "amount">[]
}

export type MealPlanActions = {
	updateDaysAmount: (daysAmount: number) => void
	updateMeals: (meals: MealState[]) => void
	updateMandatoryMeals: (meals: MealState[]) => void
}
