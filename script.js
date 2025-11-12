document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.querySelector(".heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Рандомизируем размер
        const size = Math.random() * 20 + 20; // от 20px до 40px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}vw`; // Рандомная позиция по ширине

        // Создаем псевдоэлементы через JS для стилизации, чтобы они корректно масштабировались
        // CSS для .heart div:first-child и .heart div:last-child будет применять стили :before и :after
        const before = document.createElement("div");
        before.style.width = "100%";
        before.style.height = "100%";
        before.style.backgroundColor = "inherit";
        before.style.borderRadius = "50%";
        before.style.position = "absolute";
        heart.appendChild(before); // Теперь это :first-child

        const after = document.createElement("div");
        after.style.width = "100%";
        after.style.height = "100%";
        after.style.backgroundColor = "inherit";
        after.style.borderRadius = "50%";
        after.style.position = "absolute";
        heart.appendChild(after); // Теперь это :last-child

        heart.style.animationDuration = `${Math.random() * 4 + 6}s`; // Длительность анимации от 6 до 10 секунд
        heart.style.animationDelay = `${Math.random() * 5}s`; // Задержка появления

        heartContainer.appendChild(heart);

        // Удаляем сердечко после завершения анимации, чтобы не перегружать DOM
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }

    // Генерируем сердечки каждые 300 мс
    setInterval(createHeart, 300);
    // И сразу генерируем несколько в начале, чтобы они появились сразу
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});
