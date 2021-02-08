
const getInput = input => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showMeal(data);
        })
}
const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const input = document.getElementById('meal').value;

    if (input == "") {
        alert("Invalid")
    }
    else
        getInput(input)
})

const showMeal = mealName => {
    const mealBody = document.getElementById("mealBody");
    const ingri = document.getElementById('ingrident');
    mealBody.innerHTML = "";
    ingri.innerHTML = "";
    if (mealName.meals == null) {
        const mealNames = document.createElement('div');
        const mealInfo = `
        <h1>Not Found</h1>  
     `
        mealNames.innerHTML = mealInfo;
        mealBody.appendChild(mealNames);
    }
    else {
        mealName.meals.forEach(name => {
            const mealNames = document.createElement('div');
            mealNames.onclick = () => ingrident(name);
            const mealInfo = `
            <img  src="${name.strMealThumb}">
            <h3>${name.strMeal}</h3>    
         `
            mealNames.innerHTML = mealInfo;
            mealBody.appendChild(mealNames);
        });
    }
}
const ingrident = name => {
    const ingri = document.getElementById('ingrident');
    ingri.innerHTML = "";
    const ingridentInfo = document.createElement('div');
    ingridentInfo.className = 'ingrident';
    const ingridents = `
    <img src="${name.strMealThumb}">
    <h4> ${name.strIngredient1}</h4>
    <h4> ${name.strIngredient2}</h4>
    <h4> ${name.strIngredient3}</h4>
    <h4> ${name.strIngredient4}</h4>
    <h4> ${name.strIngredient5}</h4>
    <h4> ${name.strIngredient6}</h4>
    <h4> ${name.strIngredient7}</h4>
    <h4> ${name.strIngredient8}</h4>
    <h4> ${name.strIngredient9}</h4>
    `
    ingridentInfo.innerHTML = ingridents;
    ingri.appendChild(ingridentInfo);
}
