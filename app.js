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
    });
    drawWheel();
}

restaurantInput.addEventListener('keypress',function(event){
    if (event.key === "Enter") {
        addButton.click();
    }
})

function drawWheel() {
    const canvas = document.getElementById("wheel-canvas");
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width/2;
    const centerY = canvas.height/2;
    const radius = Math.min(centerX, centerY) - 10;
    const sliceAngle = (2 * Math.PI) / restaurants.length;


    // Clear the previous drawing
    ctx.clearRect(0,0,canvas.width,canvas.length);

    // Draw each slice
    restaurants.forEach((restaurant, index) => {
        const startAngle = index * sliceAngle;
        const endAngle = startAngle + sliceAngle;
        const color = `hsl(${index * (360 / restaurants.length)}, 70%, 60%)`;

        // Draw the slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();

        // Add the text
        const textAngle = startAngle + sliceAngle / 2;
        const textX = centerX + Math.cos(textAngle) * (radius / 1.5);
        const textY = centerY + Math.sin(textAngle) * (radius / 1.5);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 14px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(restaurant, textX, textY);
})}

drawWheel();