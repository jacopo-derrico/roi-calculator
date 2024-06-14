const priceRange = document.getElementById('priceRange');
const btnAdd = document.getElementById('btnAdd');
const btnDetract = document.getElementById('btnDetract');
const finalPrice = document.getElementById('finalPrice');

const notchesContainer = document.getElementById('notches-container');

function createNotches(positions) {
    positions.forEach(position => {
        const notch = document.createElement('div');
        notch.classList.add('notch');
        notch.style.left = `calc(${position}% - 0.5px)`; // Adjust position as needed
        notchesContainer.appendChild(notch);
    });
}

// Define the positions for the six notches
const notchPositions = [3, 9, 15, 24, 45, 70];
createNotches(notchPositions);

function roiCalculator(contracts) {
    finalPrice.textContent = contracts*20;
    console.log(contracts)
}

priceRange.addEventListener('input', function() {
    roiCalculator(priceRange.value);
});

btnDetract.addEventListener('click', () => {
    if (priceRange.value > 9) {
        priceRange.value = parseInt(priceRange.value) - 3;
        roiCalculator(priceRange.value);
    }
});

btnAdd.addEventListener('click', () => {
    if (priceRange.value < 150) {
        priceRange.value = parseInt(priceRange.value) + 3;
        roiCalculator(priceRange.value);
    }
});

roiCalculator(priceRange.value);