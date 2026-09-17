document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const saveTheme = localStorage.getItem('theme');

    if (saveTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeBtn) themeBtn.textContent = '☀️';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            // 3. Сохраняем выбор в localStorage
            if (document.body.classList.contains('dark-theme')) {
                themeBtn.textContent = '☀️';
                localStorage.setItem('theme', 'dark'); // Запоминаем "dark"
            } else {
                themeBtn.textContent = '🌛';
                localStorage.setItem('theme', 'light'); // Запоминаем "light"
            }
        });
    }
});