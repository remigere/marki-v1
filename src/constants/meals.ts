import { Ingredient } from "@/constants/ingredients"

export type NutritionValue = {
    label: string
    value: number
    unit: string
}

export type Meal = {
    allergens?: Ingredient[]
    description: string
    ingredients: Ingredient[]
    nutritionValues: NutritionValue[]
    photoSrc: string
    servingSize: Pick<NutritionValue, "value" | "unit">
    title: string
    price: number
}

export const MEALS: { [key: string]: Meal } = {
    "super-veggie": {
        description: "A nutritious meal with black lentils, broccoli, cauliflower, mushrooms, garlic, and ginger, seasoned with cumin, apple cider vinegar, and lime.",
        price:18,
        ingredients: [
            { title: "black lentils", photoSrc: "/img/ingredients/black-lentils.webp"},
            { title: "broccoli", photoSrc: "/img/ingredients/broccoli.webp"},
            { title: "cauliflower", photoSrc: "/img/ingredients/cauliflower.webp"},
            { title: "shiitake or maitake mushrooms", photoSrc: "/img/ingredients/mushrooms.webp"},
            { title: "garlic", photoSrc: "/img/ingredients/garlic.webp"},
            { title: "ginger root", photoSrc: "/img/ingredients/ginger.webp"},
            { title: "lime", photoSrc: "/img/ingredients/lime.webp"},
            { title: "cumin", photoSrc: "/img/ingredients/cumin.webp"},
            { title: "apple cider vinegar", photoSrc: "/img/ingredients/apple-cider-vinegar.webp"},
            { title: "hemp seeds", photoSrc: "/img/ingredients/hemp-seeds.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 379, unit: "cal" },
            { label: "Protein", value: 25, unit: "g" },
            { label: "Carbohydrates", value: 60, unit: "g" },
            { label: "Fat", value: 10, unit: "g" },
            { label: "Fiber", value: 20, unit: "g" }
        ],
        photoSrc: "/img/meals/super-veggie.jpg",
        servingSize: { value: 50, unit: "gm" },
        title: "Super Veggie",
    },
    "nutty-pudding": {
        description: "A creamy pudding made with macadamia nut milk, ground macadamia nuts, walnuts, chia seeds, flaxseed, and berries.",
        allergens: [
            { title: "macadamia nuts", photoSrc: "/img/ingredients/macadamia-nuts.webp"},
            { title: "walnuts", photoSrc: "/img/ingredients/walnuts.webp"},
            { title: "brazil nut", photoSrc: "/img/ingredients/brazil-nut.webp"},
            { title: "sunflower lecithin", photoSrc: "/img/ingredients/sunflower-lecithin.webp"}
        ],
        price:18,
        ingredients: [
            { title: "macadamia nut milk", photoSrc: "/img/ingredients/macadamia-nut-milk.webp"},
            { title: "ground macadamia nuts", photoSrc: "/img/ingredients/macadamia-nuts.webp"},
            { title: "ground walnuts", photoSrc: "/img/ingredients/walnuts.webp"},
            { title: "chia seeds", photoSrc: "/img/ingredients/chia-seeds.webp"},
            { title: "ground flaxseed", photoSrc: "/img/ingredients/flaxseed.webp"},
            { title: "brazil nut", photoSrc: "/img/ingredients/brazil-nut.webp"},
            { title: "cocoa powder", photoSrc: "/img/ingredients/cocoa-powder.webp"},
            { title: "sunflower lecithin", photoSrc: "/img/ingredients/sunflower-lecithin.webp"},
            { title: "ceylon cinnamon", photoSrc: "/img/ingredients/cinnamon.webp"},
            { title: "berries", photoSrc: "/img/ingredients/berries.webp"},
            { title: "cherries", photoSrc: "/img/ingredients/cherries.webp"},
            { title: "pomegranate juice", photoSrc: "/img/ingredients/pomegranate-juice.webp"},
            { title: "EVOO (optional)", photoSrc: "/img/ingredients/evoo.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 433, unit: "cal" },
            { label: "Protein", value: 10, unit: "g" },
            { label: "Carbohydrates", value: 30, unit: "g" },
            { label: "Fat", value: 35, unit: "g" },
            { label: "Fiber", value: 15, unit: "g" }
        ],
        photoSrc: "/img/meals/nutty-pudding.jpg",
        servingSize: { value: 100, unit: "ml" },
        title: "Nutty Pudding",
    },
    "buddha-bowl": {
        price:18,
        description: "A wholesome bowl with Japanese sweet potato, asparagus, kale, red pepper, carrots, walnuts, and white beans.",
        allergens: [
            { title: "walnuts", photoSrc: "/img/ingredients/walnuts.webp"}
        ],
        ingredients: [
            { title: "Japanese sweet potato", photoSrc: "/img/ingredients/sweet-potato.webp"},
            { title: "asparagus", photoSrc: "/img/ingredients/asparagus.webp"},
            { title: "kale", photoSrc: "/img/ingredients/kale.webp"},
            { title: "red pepper", photoSrc: "/img/ingredients/red-pepper.webp"},
            { title: "carrots", photoSrc: "/img/ingredients/carrot.webp"},
            { title: "walnuts", photoSrc: "/img/ingredients/walnuts.webp"},
            { title: "white beans", photoSrc: "/img/ingredients/white-beans.webp"},
            { title: "apple cider vinegar", photoSrc: "/img/ingredients/apple-cider-vinegar.webp"},
            { title: "cumin seeds", photoSrc: "/img/ingredients/cumin-seeds.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 450, unit: "cal" },
            { label: "Protein", value: 15, unit: "g" },
            { label: "Carbohydrates", value: 60, unit: "g" },
            { label: "Fat", value: 20, unit: "g" },
            { label: "Fiber", value: 20, unit: "g" }
        ],
        photoSrc: "/img/meals/buddha-bowl.jpg",
        servingSize: { value: 250, unit: "gm" },
        title: "Buddha Bowl",
    },
    "roasted-veggie-lettuce-wraps": {
        price:18,
        description: "Delicious wraps with roasted sweet potato, cauliflower, fennel, white onion, and a refreshing pomegranate relish.",
        ingredients: [
            { title: "white sweet potato", photoSrc: "/img/ingredients/sweet-potato.webp"},
            { title: "cauliflower", photoSrc: "/img/ingredients/cauliflower.webp"},
            { title: "fennel", photoSrc: "/img/ingredients/fennel.webp"},
            { title: "white onion", photoSrc: "/img/ingredients/white-onion.webp"},
            { title: "lemon", photoSrc: "/img/ingredients/lemon.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"},
            { title: "ginger", photoSrc: "/img/ingredients/ginger.webp"},
            { title: "smoked paprika", photoSrc: "/img/ingredients/smoked-paprika.webp"},
            { title: "cumin powder", photoSrc: "/img/ingredients/cumin-powder.webp"},
            { title: "pepper", photoSrc: "/img/ingredients/pepper.webp"},
            { title: "fresh herbs", photoSrc: "/img/ingredients/fresh-herbs.webp"},
            { title: "butter lettuce", photoSrc: "/img/ingredients/butter-lettuce.webp"},
            { title: "radishes", photoSrc: "/img/ingredients/radishes.webp"},
            { title: "pomegranate seeds", photoSrc: "/img/ingredients/pomegranate-seeds.webp"},
            { title: "mint leaves", photoSrc: "/img/ingredients/mint-leaves.webp"},
            { title: "jalapeño", photoSrc: "/img/ingredients/jalapeno.webp"},
            { title: "toasted pumpkin seeds", photoSrc: "/img/ingredients/pumpkin-seeds.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 300, unit: "cal" },
            { label: "Protein", value: 10, unit: "g" },
            { label: "Carbohydrates", value: 40, unit: "g" },
            { label: "Fat", value: 15, unit: "g" },
            { label: "Fiber", value: 10, unit: "g" }
        ],
        photoSrc: "/img/meals/roasted-veggie-lettuce-wraps.jpg",
        servingSize: { value: 200, unit: "gm" },
        title: "Roasted Veggie Lettuce Wraps",
    },
    "blood-orange-and-fennel-salad": {
        price:18,
        description: "A refreshing salad with blood orange, fennel, red onion, mint, and a tangy lemon dressing.",
        allergens: [
            { title: "almonds", photoSrc: "/img/ingredients/almonds.webp"}
        ],
        ingredients: [
            { title: "blood orange", photoSrc: "/img/ingredients/blood-orange.webp"},
            { title: "lemon", photoSrc: "/img/ingredients/lemon.webp"},
            { title: "fennel", photoSrc: "/img/ingredients/fennel.webp"},
            { title: "red onion", photoSrc: "/img/ingredients/red-onion.webp"},
            { title: "mint", photoSrc: "/img/ingredients/mint.webp"},
            { title: "pomegranate seeds", photoSrc: "/img/ingredients/pomegranate-seeds.webp"},
            { title: "greens" , photoSrc: "/img/ingredients/greens.webp"},
            { title: "toasted slivered almonds" , photoSrc: "/img/ingredients/toasted-silvers-almonds.webp"},
            { title: "white beans", photoSrc: "/img/ingredients/white-beans.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"},
        ],
        nutritionValues: [
            { label: "Calories", value: 250, unit: "cal" },
            { label: "Protein", value: 5, unit: "g" },
            { label: "Carbohydrates", value: 30, unit: "g" },
            { label: "Fat", value: 10, unit: "g" },
            { label: "Fiber", value: 10, unit: "g" }
        ],
        photoSrc: "/img/meals/blood-orange-and-fennel-salad.jpg",
        servingSize: { value: 150, unit: "gm" },
        title: "Blood Orange and Fennel Salad",
    },
    "roasted-beets-and-green-lentils-and-wilted-chard": {
        price:18,
        description: "A hearty dish with roasted beets, green lentils, and wilted chard, topped with toasted walnuts.",
        allergens: [
            { title: "walnuts", photoSrc: "/img/ingredients/walnuts.webp"}
        ],
        ingredients: [
            { title: "green lentils", photoSrc: "/img/ingredients/green-lentils.webp"},
            { title: "rainbow or swiss chard", photoSrc: "/img/ingredients/rainbow-chard.webp"},
            { title: "beets", photoSrc: "/img/ingredients/beets.webp"},
            { title: "walnuts", photoSrc: "/img/ingredients/walnuts.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"},
            { title: "fresh herbs", photoSrc: "/img/ingredients/fresh-herbs.webp"},
            { title: "pepper", photoSrc: "/img/ingredients/pepper.webp"},
            { title: "chipotle powder", photoSrc: "/img/ingredients/chipotle-powder.webp"},
            { title: "Italian seasoning", photoSrc: "/img/ingredients/italian-seasoning.webp"},
            { title: "garlic", photoSrc: "/img/ingredients/garlic.webp"},
            { title: "shallot", photoSrc: "/img/ingredients/shallot.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 400, unit: "cal" },
            { label: "Protein", value: 15, unit: "g" },
            { label: "Carbohydrates", value: 50, unit: "g" },
            { label: "Fat", value: 15, unit: "g" },
            { label: "Fiber", value: 15, unit: "g" }
        ],
        photoSrc: "/img/meals/roasted-beets-and-green-lentils-and-wilted-chard.jpg",
        servingSize: { value: 200, unit: "gm" },
        title: "Roasted Beets and Green Lentils and Wilted Chard",
    },
    "roasted-cabbage-steaks-and-sweet-potato-mash": {
        price:18,
        description: "A filling meal with roasted purple cabbage steaks and sweet potato mash, topped with toasted nuts.",
        allergens: [
            { title: "almond milk", photoSrc: "/img/ingredients/unsweetened-almond-milk.webp"},
            { title: "walnuts or pecans", photoSrc: "/img/ingredients/walnuts.webp"}
        ],
        ingredients: [
            { title: "purple cabbage", photoSrc: "/img/ingredients/purple-cabbage.webp"},
            { title: "orange sweet potato", photoSrc: "/img/ingredients/sweet-potato.webp"},
            { title: "unsweetened almond milk", photoSrc: "/img/ingredients/unsweetened-almond-milk.webp"},
            { title: "parsley", photoSrc: "/img/ingredients/parsley.webp"},
            { title: "pumpkin seeds", photoSrc: "/img/ingredients/pumpkin-seeds.webp"},
            { title: "cinnamon", photoSrc: "/img/ingredients/cinnamon.webp"},
            { title: "nutmeg", photoSrc: "/img/ingredients/nutmeg.webp"},
            { title: "toasted walnuts or pecans", photoSrc: "/img/ingredients/walnuts.webp"},
            { title: "lemon", photoSrc: "/img/ingredients/lemon.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"},
            { title: "chipotle powder", photoSrc: "/img/ingredients/chipotle-powder.webp"},
            { title: "paprika", photoSrc: "/img/ingredients/paprika.webp"},
            { title: "onion powder", photoSrc: "/img/ingredients/onion-powder.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 350, unit: "cal" },
            { label: "Protein", value: 10, unit: "g" },
            { label: "Carbohydrates", value: 50, unit: "g" },
            { label: "Fat", value: 15, unit: "g" },
            { label: "Fiber", value: 10, unit: "g" }
        ],
        photoSrc: "/img/meals/roasted-cabbage-steaks-and-sweet-potato-mash.jpg",
        servingSize: { value: 250, unit: "gm" },
        title: "Roasted Cabbage Steaks and Sweet Potato Mash",
    },
    "sweet-potato-and-mushroom-toast": {
        price:18,
        description: "A savory toast with roasted sweet potato, avocado, and mushroom topping, garnished with sesame seeds and nori.",
        allergens: [
            { title: "sesame seeds", photoSrc: "/img/ingredients/sesame-seeds.webp"}
        ],
        ingredients: [
            { title: "orange sweet potato", photoSrc: "/img/ingredients/orange-sweet-potato.webp"},
            { title: "oyster mushrooms", photoSrc: "/img/ingredients/oyster-mushrooms.webp"},
            { title: "Cremini mushrooms", photoSrc: "/img/ingredients/cremini-mushrooms.webp"},
            { title: "avocado", photoSrc: "/img/ingredients/avocado.webp"},
            { title: "coconut aminos", photoSrc: "/img/ingredients/coconut-aminos.webp"},
            { title: "orange zest", photoSrc: "/img/ingredients/orange-zest.webp"},
            { title: "lime", photoSrc: "/img/ingredients/lime.webp"},
            { title: "garlic", photoSrc: "/img/ingredients/garlic.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"},
            { title: "smoked paprika", photoSrc: "/img/ingredients/smoked-paprika.webp"},
            { title: "toasted sesame seeds", photoSrc: "/img/ingredients/sesame-seeds.webp"},
            { title: "arugula", photoSrc: "/img/ingredients/arugula.webp"},
            { title: "dried nori", photoSrc: "/img/ingredients/dried-nori.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 400, unit: "cal" },
            { label: "Protein", value: 10, unit: "g" },
            { label: "Carbohydrates", value: 50, unit: "g" },
            { label: "Fat", value: 20, unit: "g" },
            { label: "Fiber", value: 10, unit: "g" }
        ],
        photoSrc: "/img/meals/sweet-potato-and-mushroom-toast.jpg",
        servingSize: { value: 200, unit: "gm" },
        title: "Sweet Potato and Mushroom Toast",
    },
    "chickpea-curry-over-greens": {
        price:18,
        description: "A flavorful curry with chickpeas, sweet potato, and spices served over greens.",
        ingredients: [
            { title: "fresh ginger", photoSrc: "/img/ingredients/ginger.webp"},
            { title: "garlic", photoSrc: "/img/ingredients/garlic.webp"},
            { title: "scallion", photoSrc: "/img/ingredients/scallion.webp"},
            { title: "red pepper", photoSrc: "/img/ingredients/red-pepper.webp"},
            { title: "white sweet potato", photoSrc: "/img/ingredients/sweet-potato.webp"},
            { title: "chickpeas", photoSrc: "/img/ingredients/chickpeas.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"},
            { title: "coconut amino (optional)", photoSrc: "/img/ingredients/coconut-aminos.webp"},
            { title: "curry powder", photoSrc: "/img/ingredients/curry-powder.webp"},
            { title: "cinnamon", photoSrc: "/img/ingredients/cinnamon.webp"},
            { title: "macadamia nut milk", photoSrc: "/img/ingredients/macadamia-nut-milk.webp"},
            { title: "cilantro", photoSrc: "/img/ingredients/cilantro.webp"},
            { title: "baby romaine", photoSrc: "/img/ingredients/romaine.webp"},
            { title: "jalapeño", photoSrc: "/img/ingredients/jalapeno.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 450, unit: "cal" },
            { label: "Protein", value: 15, unit: "g" },
            { label: "Carbohydrates", value: 60, unit: "g" },
            { label: "Fat", value: 20, unit: "g" },
            { label: "Fiber", value: 15, unit: "g" }
        ],
        photoSrc: "/img/meals/chickpea-curry-over-greens.jpg",
        servingSize: { value: 250, unit: "gm" },
        title: "Chickpea Curry Over Greens",
    },
    "beet-poke": {
        price:18,
        description: "A vibrant dish with tender beets, avocado, mango, and mixed greens, topped with sesame seeds and a lime dressing.",
        allergens: [
            { title: "sesame seeds", photoSrc: "/img/ingredients/sesame-seeds.webp"}
        ],
        ingredients: [
            { title: "beets", photoSrc: "/img/ingredients/beets.webp"},
            { title: "purple or watermelon radishes", photoSrc: "/img/ingredients/radish.webp"},
            { title: "avocado", photoSrc: "/img/ingredients/avocado.webp"},
            { title: "mango", photoSrc: "/img/ingredients/mango.webp"},
            { title: "mixed greens", photoSrc: "/img/ingredients/greens.webp"},
            { title: "limes", photoSrc: "/img/ingredients/lime.webp"},
            { title: "toasted sesame seeds", photoSrc: "/img/ingredients/toasted-sesame-seeds.webp"},
            { title: "green onions", photoSrc: "/img/ingredients/green-onions.webp"},
            { title: "cilantro", photoSrc: "/img/ingredients/cilantro.webp"},
            { title: "microgreens", photoSrc: "/img/ingredients/greens.webp"},
            { title: "EVOO", photoSrc: "/img/ingredients/evoo.webp"},
            { title: "coconut aminos", photoSrc: "/img/ingredients/coconut-aminos.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 300, unit: "cal" },
            { label: "Protein", value: 5, unit: "g" },
            { label: "Carbohydrates", value: 40, unit: "g" },
            { label: "Fat", value: 15, unit: "g" },
            { label: "Fiber", value: 10, unit: "g" }
        ],
        photoSrc: "/img/meals/beet-poke.jpg",
        servingSize: { value: 200, unit: "gm" },
        title: "Beet Poke",
    },
    "collard-green-wraps-and-red-pepper-dip": {
        price:18,
        description: "Healthy wraps with collard greens, mixed veggies, and a creamy red pepper dip.",
        ingredients: [
            { title: "collard greens", photoSrc: "/img/ingredients/collard-greens.webp"},
            { title: "mixed veggies", photoSrc: "/img/ingredients/mixed-veggies.webp"},
            { title: "avocado", photoSrc: "/img/ingredients/avocado.webp"},
            { title: "red pepper", photoSrc: "/img/ingredients/red-pepper.webp"},
            { title: "macadamia nuts", photoSrc: "/img/ingredients/macadamia-nuts.webp"},
        ],
        nutritionValues: [
            { label: "Calories", value: 350, unit: "cal" },
            { label: "Protein", value: 10, unit: "g" },
            { label: "Carbohydrates", value: 40, unit: "g" },
            { label: "Fat", value: 20, unit: "g" },
            { label: "Fiber", value: 10, unit: "g" }
        ],
        photoSrc: "/img/meals/collard-green-wraps-and-red-pepper-dip.jpg",
        servingSize: { value: 200, unit: "gm" },
        title: "Collard Green Wraps and Red Pepper Dip",
    },
    "roasted-bok-choy-and-japanese-sweet-potato": {
        price:18,
        description: "A delicious combination of roasted bok choy and Japanese sweet potato, topped with walnuts and a citrus tahini sauce.",
        allergens: [
            { title: "walnuts", photoSrc: "/img/ingredients/walnuts.webp"}
        ],
        ingredients: [
            { title: "baby bok choy", photoSrc: "/img/ingredients/baby-bok-choy.webp"},
            { title: "chopped walnuts", photoSrc: "/img/ingredients/chopped-walnuts.webp"},
            { title: "chopped green onions", photoSrc: "/img/ingredients/green-onions.webp"},
            { title: "cilantro or parsley", photoSrc: "/img/ingredients/cilantro.webp"},
            { title: "Japanese sweet potato", photoSrc: "/img/ingredients/sweet-potato.webp"},
            { title: "citrus tahini sauce", photoSrc: "/img/ingredients/citrus-tahini-sauce.webp"}
        ],
        nutritionValues: [
            { label: "Calories", value: 400, unit: "cal" },
            { label: "Protein", value: 10, unit: "g" },
            { label: "Carbohydrates", value: 50, unit: "g" },
            { label: "Fat", value: 20, unit: "g" },
            { label: "Fiber", value: 10, unit: "g" }
        ],
        photoSrc: "/img/meals/roasted-bok-choy-and-japanese-sweet-potato.jpg",
        servingSize: { value: 200, unit: "gm" },
        title: "Roasted Bok Choy and Japanese Sweet Potato",
    },
}