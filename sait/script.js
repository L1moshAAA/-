
// Плавное переключение страниц
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        
        // Анимация исчезновения
        document.querySelector('.page.active').classList.remove('active');
        
        // Задержка для анимации
        setTimeout(() => {
            document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
            link.classList.add('active');
            document.getElementById(pageId).classList.add('active');
        }, 300);
    });
});

const quotes = [
    "«Неважно, как медленно ты продвигаешься. Главное – ты не останавливаешься.»",
    "«Боль временна, гордость – навсегда.»",
    "«Твое тело может выдержать почти всё. Это твой разум нужно убедить.»"
];

document.getElementById('new-quote-btn').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('.quote-text').textContent = randomQuote;
});

document.getElementById('calculate-btn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    if (!weight) {
        alert("Введите ваш вес!");
        return;
    }

    // Расчёты (упрощённая формула)
    const protein = Math.round(weight * 2 * activity);
    const fat = Math.round(weight * 0.8 * activity);
    const carbs = Math.round(weight * 4 * activity);

    document.getElementById('protein').querySelector('.value').textContent = `${protein} г`;
    document.getElementById('fat').querySelector('.value').textContent = `${fat} г`;
    document.getElementById('carbs').querySelector('.value').textContent = `${carbs} г`;
});
