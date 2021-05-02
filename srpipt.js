console.log("Miałem dzisiaj dobry dzień, nie spiernicz tego :D !!");
let action = document.querySelector(".action");
let table = document.querySelector(".table");
let changeColor = document.querySelector(".changeColor");

action.addEventListener("click", () => {
  table.classList.toggle("table__changeColor");
  if (table.classList.contains("table__changeColor")) {
    changeColor.innerText = "pierwszy";
  } else {
    changeColor.innerText = "drugi";
  }
});





Resources