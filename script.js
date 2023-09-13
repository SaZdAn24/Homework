const input = document.querySelector(".input_nik"); // нашел input на странице
const receiving = document.querySelector(".receiving"); // нашел div, в который нужно поместить текст

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = input.value;
  receiving.textContent = inputValue;
});
const name = document.querySelectorAll(".name");
console.log(name);

knopa.addEventListener("click", function () {
  name.classList.toggle("hidden");
});
console.log("hii");
