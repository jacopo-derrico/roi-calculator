const priceRange = document.getElementById('priceRange');
const btnAdd = document.getElementById('btnAdd');
const btnDetract = document.getElementById('btnDetract');
const finalPrice = document.getElementById('finalPrice');
const contractsCount = document.getElementById('contracts');

// notches
const notchesContainer = document.getElementById('notches-container');

function createNotches(positions) {
    positions.forEach(position => {
        const notch = document.createElement('div');
        notch.classList.add('notch');
        notch.style.left = `calc(${position}% - 0.5px)`; // Adjust position as needed
        notchesContainer.appendChild(notch);
    });
}

const notchPositions = [3, 9, 15, 24, 45, 70];
createNotches(notchPositions);

// type of contracts

const activities = [
    { name: "Servizi di pulizia domestica", value: 20 },
    { name: "Addetto alla pulizia di piscine", value: 20 },
    { name: "Pulizia finestre", value: 20 },
    { name: "Falegnami & Carpentieri", value: 22 },
    { name: "Servizi di pavimentazione", value: 30 },
    { name: "Servizi di posa di fondazioni", value: 80 },
    { name: "Servizi per porte da garage", value: 18 },
    { name: "Tuttofare", value: 19 },
    { name: "Costruzione piscine", value: 20 },
    { name: "Riparazione e mantenimento Tetti", value: 20 },
    { name: "Impresa di Costruzioni e Ristrutturazione", value: 25 },
    { name: "Isolamento termico e Ristrutturazione facciate", value: 30 },
    { name: "Infissi, riparazione finestre e vetri", value: 18 },
    { name: "Riparazione di elettrodomestici", value: 20 },
    { name: "Elettricisti", value: 27 },
    { name: "Caldaie, Impianti di riscaldamento & Condizionatori", value: 26 },
    { name: "Servizi di disinfestazione", value: 22 },
    { name: "Idraulici", value: 39 },
    { name: "Servizi per danni causati dall'acqua", value: 39 },
    { name: "Servizi paesaggistici", value: 30 },
    { name: "Giardinieri e cura del prato", value: 19 },
    { name: "Servizi di potatura alberi", value: 16 },
    { name: "Ispettore immobiliare", value: 23 },
    { name: "Sgombri & Servizi di smaltimento dei rifiuti", value: 18 },
    { name: "Traslochi", value: 22 },
    { name: "Pulizia di tappeti e Moquette", value: 20 }
];

const selectElement = document.getElementById('activitySelect');

activities.forEach(activity => {
    const option = document.createElement('option');
    option.value = activity.value;
    option.textContent = `${activity.name} - ${activity.value}€`;
    selectElement.appendChild(option);
});

selectElement.addEventListener('change', function() {
    roiCalculator(priceRange.value, selectElement.value);
});


// actual calculator

function roiCalculator(contracts, cost) {
    finalPrice.textContent = contracts*cost;
    contractsCount.textContent = contracts;
}

priceRange.addEventListener('input', function() {
    roiCalculator(priceRange.value, selectElement.value);

});

btnDetract.addEventListener('click', () => {
    if (priceRange.value > 9) {
        priceRange.value = parseInt(priceRange.value) - 3;
        roiCalculator(priceRange.value, selectElement.value);
    }
});

btnAdd.addEventListener('click', () => {
    if (priceRange.value < 150) {
        priceRange.value = parseInt(priceRange.value) + 3;
        roiCalculator(priceRange.value, selectElement.value);
    }
});

roiCalculator(priceRange.value, 20);

function updateRangeStyle() {
    const value = (priceRange.value - priceRange.min) / (priceRange.max - priceRange.min) * 100;
    priceRange.style.setProperty('--range-percent', value + '%');
}

priceRange.addEventListener('input', updateRangeStyle);
updateRangeStyle()