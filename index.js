const priceRange = document.getElementById('priceRange');
const btnAddaddBtn = document.getElementById('btnAdd');
const btnDetract = document.getElementById('btnDetract');
const finalPrice = document.getElementById('finalPrice');

function roiCalculator(contracts) {
    finalPrice.textContent = contracts*20;
    console.log(contracts)
}

priceRange.addEventListener('input', function() {
    roiCalculator(priceRange.value);
});

roiCalculator(priceRange.value);