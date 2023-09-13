async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

async function renderCards() {
  const cardContainer = document.querySelector(".сardProduct");
  // Получаем данные из fetchPosts()
  const products = await fetchPosts();

  // получаем и отрисовываем 6 карточек через перебор массива фор
  // где ограничитель 6 это будет и < 6
  // Вызываем функцию fetchPosts, чтобы получить данные
  for (let i = 0; i < 6 && i < products.length; i++) {
    const product = products[i];
    const card = document.createElement("div");
    card.classList.add("cardek");
    card.innerHTML = `
        <h1 class="card-title">${product.title}</h1>
        <p>${product.body}</p>
      `;

    // Добавляем обработчик на заголовок
    const cardTitle = card.querySelector(".card-title");
    cardTitle.addEventListener("click", () => {
      // Создаем input
      const input = document.createElement("input");
      input.type = "text";
      // Задаем значение input равное текущему заголовку
      input.value = product.title;
      input.classList.add("editable-input");
      // replaceWith это команда изменить
      cardTitle.replaceWith(input);
      // Добавляем обработчик события для сохранения (blur) тут можно изменить при нажатии на шифт
      input.addEventListener("blur", () => {
        const newTitle = input.value;
        // Заменяем содержимое заголовка
        cardTitle.textContent = newTitle;

        // Возвращаем заголовок и убираем input
        input.replaceWith(cardTitle);
      });
      input.focus();
    });

    cardContainer.appendChild(card);
  }
}
renderCards();
