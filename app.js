
const getInput = input => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showMeal(data);
        })
}
const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const input = document.getElementById('meal').value;
    getInput(input)
})


const showMeal = mealName => {

    const mealBody = document.getElementById("mealBody")
    mealName.meals.forEach(name => {
        console.log(name);
        const mealNames = document.createElement('div');   
        const mealInfo = `
        <img onclick="ingrident()" src="${name.strMealThumb}">
        <h3>${name.strMeal}</h3>
     `
        mealNames.innerHTML = mealInfo;
        mealBody.appendChild(mealNames);
        
    });
}

const ingrident=name=>{
   console.log('object');
    // const ingri =document.getElementById('ingrident');
    // const ss=createElement('div');
    // const ingridents=`
    // <img src="${name.strMealThumb}">
    // <h4> ${name.strIngredient1}</h4>
    // <h4> ${name.strIngredient2}</h4>
    // <h4> ${name.strIngredient3}</h4>
    // <h4> ${name.strIngredient4}</h4>
    // <h4> ${name.strIngredient5}</h4>
    // <h4> ${name.strIngredient6}</h4>
    // <h4> ${name.strIngredient7}</h4>
    // <h4> ${name.strIngredient8}</h4>
    // <h4> ${name.strIngredient9}</h4>
    // `
    // ss.innerHTML=ingridents;
    // ingri.appendChild(ss);
}
