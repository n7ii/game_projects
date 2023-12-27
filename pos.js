const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

const items = []

function renderCart() {
    const ul = document.getElementById('items')
    ul.innerHTML=""
    items.forEach(e => {
   const li = `
   <li>
   <img src="${e.img}" alt="" , width="100px">
   <div>   
       <article class="flex justifly-beetween">
           <h3> ${e.name} </h3>
           <span> ${e.price} </span>
       </article>

       <article class ="flex justifly-beetween">
           <span class="border-none border">
               <button>-</button>
               <span>${e.quantity}</span>
               <button>+</button>
           </span>
           <span>
                <button>
                   <i class="fa-solid fa-trash"></i>
                   </button>
           </span>
       </article>
   </div>
</li>
   
   `
ul.innerHTML+=li
    })
}

async function getMeals() {
  const response = await fetch(API)
  const data = await response.json()
  console.log(data)
  const meals = data.meals
  const ul =  document.getElementById('product-list')
  meals.forEach(e => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const h3 = document.createElement('h3')
    const price = Math.floor(Math.random() * 10000)
    li.addEventListener('click',()=> {
        const item = {
            name: e.strMeal,
            price,
            quantity: 1,
            img: e.strMealThumb
        }
        items.push(item)
        renderCart()
    })
    img.src = e.strMealThumb
    span.textContent = e.strMeal
    h3.textContent = price.toLocaleString()
    li.appendChild(img)
    li.appendChild(span)
    li.appendChild(h3)
    ul.appendChild(li)
  });
}
// call
getMeals()