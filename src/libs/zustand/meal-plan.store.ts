import { MealPlanState, MealPlanActions } from "@/libs/zustand/meal-plan"
import { create } from "zustand"

export const useMealPlanStore = create<MealPlanState & MealPlanActions>(
	(set, get) => ({
		daysAmount: 5,
		updateDaysAmount: (daysAmount) => set({ daysAmount }),

		meals: [],
		updateMeals: (meals) => set({ meals }),

		mandatoryMeals: [
			{
				slug: "superveggie",
				title: "Super Veggie",
			},
			{
				slug: "nuttypudding",
				title: "Nutty Pudding",
			},
		],
		updateMandatoryMeals: (meals) => set({ mandatoryMeals: meals }),
	}),
)
