console.log("Miałem dzisiaj dobry dzień, nie spiernicz tego :D !!");
let action = document.querySelector(".action");
let table = document.querySelector(".table");
let changeTableColor = document.querySelector(".changeTableColor");

action.addEventListener("click", () => {
  table.classList.toggle("table__changeColor");
  if (table.classList.contains("table__changeColor")) {
    changeTableColor.innerText = "pierwszy";
  } else {
    changeTableColor.innerText = "drugi";
  }
});

