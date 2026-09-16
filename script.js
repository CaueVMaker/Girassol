// --- CONFIGURAÇÃO DA DATA DO ENCONTRO ---
// Lembre-se: O mês começa em 0 (Jan=0, Fev=1 ... Set=8, Dez=11)
const targetDate = new Date(2026, 8, 20, 19, 0, 0).getTime();

// --- LÓGICA DE ABERTURA DO CARTÃO ---
const cardTrigger = document.getElementById('card-trigger');
const cardObject = document.getElementById('card-object');

let isFirstOpen = true;

cardTrigger.addEventListener('click', () => {
    cardObject.classList.toggle('open');

    if (isFirstOpen && cardObject.classList.contains('open')) {
        confetti({
            particleCount: 90,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#ffeb3b', '#fbc02d', '#fffde7', '#ffffff']
        });
        isFirstOpen = false;
    }
});

// --- LÓGICA DO CRONÔMETRO ---
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const daysElement = document.getElementById('days');
    if (!daysElement) return;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysElement.innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = `
            <div class="col-12 text-center p-2">
                <p class="h6 text-warning-emphasis fw-bold font-cute mb-0">Chegou o momento! 🌻💛</p>
            </div>
        `;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();