console.log("Dinner Wheel App initialized");

const addButton = document.getElementById('add-restaurant');
const restaurantInput = document.getElementById('restaurant-name');
const restaurantListDiv = document.getElementById('restaurant-list');

let restaurants = [
    "Italian", "Chinese", "Mexican", "Thai", "American",
    "Mediterranean", "Indian", "Japanese", "Korean", "Greek", "BBQ", "Seafood", "Vegan", "Fast Food"
]

updateRestaurantList();

addButton.addEventListener('click',function() {
    const name = restaurantInput.value.trim();
    if (name !== "") {
        restaurants.push(name);
        restaurantInput.value = "";
        updateRestaurantList();
    }
});

function updateRestaurantList() {
    restaurantListDiv.innerHTML = "";
    restaurants.forEach((restaurant, index) => {
        const p = document.createElement('p');
        p.textContent = `${index + 1}.${restaurant}`;
        restaurantListDiv.appendChild(p);
    })
}

restaurantInput.addEventListener('keypress',function(event){
    if (event.key === "Enter") {
        addButton.click();
    }
})