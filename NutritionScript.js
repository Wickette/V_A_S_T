    let generatedPlan = document.querySelector(".generatedMeal")
    let userCalorieInput = document.querySelector(".calorieInput")
    let calorieSubmit = document.querySelector(".calorie-submit")

console.log(userCalorieInput.value)


let getMeal = function(){
    let mealPlanURL = "https://api.spoonacular.com/mealplanner/generate/?apiKey=cdbf01ac8e2040d48cb558f6c520cc89&targetCalories="+ userCalorieInput.value.trim() +"&timeFrame=day"
    fetch(mealPlanURL)
    .then(function(response){
        console.log(response)
        if (response.ok){
            return response.json();
        }
    })
    .then(function(data){
        console.log(data)
        generatedPlan.innerHTML = ""
        //breakfast 
        let breakfast = document.createElement("p")
        breakfast.setAttribute("class", "bold-text")
        breakfast.innerHTML = "Breakfast Option: " + data.meals[0].title 
        generatedPlan.append(breakfast)
        let breakfastImg = document.createElement('img');
        breakfastImg.setAttribute("src", "https://spoonacular.com/recipeImages/" + data.meals[0].id + "-90x90." + data.meals[0].imageType)
        generatedPlan.append(breakfastImg)
        let breakfastLink = document.createElement("a")
        breakfastLink.setAttribute("href", data.meals[0].sourceUrl)
        breakfastLink.innerHTML = "Link to Recipe"
        generatedPlan.append(breakfastLink)
        //lunch
        let lunch = document.createElement("p")
        lunch.setAttribute("class", "bold-text")
        lunch.innerHTML = "Lunch Option: " + data.meals[1].title 
        generatedPlan.append(lunch)
        let lunchImg = document.createElement('img');
        lunchImg.setAttribute("src", "https://spoonacular.com/recipeImages/" + data.meals[1].id + "-90x90." + data.meals[1].imageType)
        generatedPlan.append(lunchImg)
        let lunchLink = document.createElement("a")
        lunchLink.setAttribute("href", data.meals[1].sourceUrl)
        lunchLink.innerHTML = "Link to Recipe"
        generatedPlan.append(lunchLink)
        //dinner
        let dinner = document.createElement("p")
        dinner.setAttribute("class", "bold-text")
        dinner.innerHTML = "Dinner Option: " + data.meals[2].title 
        generatedPlan.append(dinner)
        let dinnerImg = document.createElement('img');
        dinnerImg.setAttribute("src", "https://spoonacular.com/recipeImages/" + data.meals[2].id + "-90x90." + data.meals[2].imageType)
        generatedPlan.append(dinnerImg)
        let dinnerLink = document.createElement("a")
        dinnerLink.setAttribute("href", data.meals[2].sourceUrl)
        dinnerLink.innerHTML = "Link to Recipe"
        generatedPlan.append(dinnerLink)
        //total calories for all 3
        let summaryCalories = document.createElement("p");
        summaryCalories.innerHTML = "Total Calories for all 3 options = " + data.nutrients.calories
        generatedPlan.append(summaryCalories)
        //protein
        let protein = document.createElement("p");
        protein.innerHTML = "Total protein = " + data.nutrients.protein + " grams"
        generatedPlan.append(protein)
        //carbs
        let carbs = document.createElement("p");
        carbs.innerHTML = "Total carbohydrates = " + data.nutrients.carbohydrates + " grams"
        generatedPlan.append(carbs)
        //fat
        let fat = document.createElement("p");
        fat.innerHTML = "Total fat = " + data.nutrients.carbohydrates + " grams"
        generatedPlan.append(fat)

        let disclaimer = document.createElement("p");
        disclaimer.innerHTML = "Please note: food choices provided are not the most macro friendly!"
        disclaimer.setAttribute("class", "red-text")
        generatedPlan.append(disclaimer)

    })
}


calorieSubmit.addEventListener("click", getMeal)