const priceRange = document.getElementById('priceRange');
const btnAdd = document.getElementById('btnAdd');
const btnDetract = document.getElementById('btnDetract');
const rangeTooltip = document.getElementById('rangeTooltip');

priceRange.addEventListener('input', function() {
    updateTooltip();
});

btnDetract.addEventListener('click', () => {
    if (priceRange.value > 9) {
        priceRange.value = parseInt(priceRange.value) - 3;
        updateTooltip();
    }
});

btnAdd.addEventListener('click', () => {
    if (priceRange.value < 150) {
        priceRange.value = parseInt(priceRange.value) + 3;
        updateTooltip();
    }
});

function updateTooltip() {
    rangeTooltip.textContent = priceRange.value + '€';
    const tooltipWidth = rangeTooltip.style.width;
    const value = priceRange.value;

    rangeTooltip.style.left = `calc(${(100 * value) / 150}% + (${tooltipWidth / 2}px - 5px))`;
}

priceRange.addEventListener('input', updateTooltip);
updateTooltip();

const form = document.getElementById("formROI")
form.addEventListener("input", function(event) {
    event.preventDefault();
    
    var costoPerChiamata = parseFloat(document.getElementById('priceRange').value);
    var chiamateAggiuntive = parseFloat(document.getElementById("chiamateAggiuntive").value);
    var valoreCliente = parseFloat(document.getElementById("valoreCliente").value);
    var tassoConversione = parseFloat(document.getElementById("tassoConversione").value);
    
    var investimentoMensile = costoPerChiamata * chiamateAggiuntive;
    var guadagnoPotenziale = chiamateAggiuntive * (valoreCliente * (tassoConversione / 10));
    var ROI = ((guadagnoPotenziale - investimentoMensile) / investimentoMensile) * 100;
    var percentualeConversione = (chiamateAggiuntive / tassoConversione) * 100;
    var clientconvert = guadagnoPotenziale / valoreCliente;
    var roundedClientConvert = parseFloat(clientconvert.toFixed(0));

    // Impostazione degli stili inline per i risultati
    var risultatoHTML = 
        "<h3 style='text-align: center;'>Risultati:</h3>" +
     
        "<div class='info-box'>" +
        "   <h4>Numero clienti paganti</h4>" +
        "   <p style='color: #ff6347; font-weight: bold;'>" + roundedClientConvert + "</p>" +
        "</div>" +
        "<div class='info-box'>" +
        "   <h4>Costo Mensile Stimato</h4>" +
        "   <p style='color: #ff6347; font-weight: bold;'>" + investimentoMensile.toFixed(2) + "€</p>" +
        "</div>" +
        "<div class='info-box'>" +
        "   <h4>Guadagno Potenziale Mensile</h4>" +
        "   <p style='color: #ff6347; font-weight: bold;'>" + guadagnoPotenziale.toFixed(2) + "€</p>" +
        "</div>" +
        "<div class='info-box'>" +
        "   <h4>ROI:</h4>" +
        "   <p style='color: #ff6347; font-weight: bold;'>" + ROI.toFixed(2) + "%</p>" +
        "</div>";

    // Aggiunta dei risultati al contenitore
    document.getElementById("risultato").innerHTML = risultatoHTML;
});