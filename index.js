const priceRange = document.getElementById('priceRange');
const btnAdd = document.getElementById('btnAdd');
const btnDetract = document.getElementById('btnDetract');
const finalPrice = document.getElementById('finalPrice');

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