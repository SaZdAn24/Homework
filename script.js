document.addEventListener("DOMContentLoaded", function () {
  const knopa = document.querySelector(".knopa");
  const card = document.getElementById("card");
  console.log(knopa);
  console.log(card);

  knopa.addEventListener("click", function () {
    console.log("кнопк");
    card.classList.toggle("hidden");
  });
});
