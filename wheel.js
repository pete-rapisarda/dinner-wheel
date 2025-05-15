// Get references to the canvas and spin button
const canvas = document.getElementById("wheel-canvas");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spin-wheel");

function drawWheel() {
    const segmentCount = restaurants.length;
    const angleStep = (2 * Math.PI) / segmentCount;
    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#9C27B0"];

    for (let i = 0; i < segmentCount; i++) {
        const startAngle = i * angleStep;
        const angleEnd = (i + 1) * angleStep;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, startAngle, angleEnd);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.stroke();
        ctx.save();

        // Add restaurant names
        const angle = startAngle + angleStep / 2;
        ctx.translate(
            canvas.width / 2 + Math.cos(angle) * 150,
            canvas.height / 2 + Math.sin(angle) * 150
        );
        ctx.rotate(angle)
        ctx.fillStyle = "white";
        ctx.font = "14px Arial";
        ctx.fillText(restaurants[i], -ctx.measureText(restaurants[i]).width / 2, 5);
        ctx.restore();
    }
}

drawWheel();

let rotation = 0;
let spinTimeout = null;

function spinWheel() {
    const spinDuration = 3000;
    const endRotation = Math.random() * 360 + 350 *5;
    const start = Date.now();

    function animate() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / spinDuration, 1);
        rotation = endRotation * progress;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        drawWheel();
        ctx.restore();

        if (progress < 1) {
            spinTimeout = requestAnimationFrame(animate);
        } else {
            const winningIndex = Math.floor((segmentCount - (rotation / 360) % segmentCount) % segmentCount);
            alert(`🎉The winneris: ${restaurants[winningIndex]}!`);
        }
    }
    if (spinTimeout) cancelAnimationFrame(spinTimeout);
    animate();
}
spinButton.addEventListener("click", spinWheel);