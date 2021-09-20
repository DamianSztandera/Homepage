{
  const welcome = () => {
    console.log("Miałem dzisiaj dobry dzień, nie spiernicz tego :D !!");
    }
    
    const onChangeColorTableClick = () => {
      table.classList.toggle("table__changeColor");
      if (table.classList.contains("table__changeColor")) {
        changeTableColor.innerText = "pierwszy";
      } else {
        changeTableColor.innerText = "drugi";
      }
    };
    const action = document.querySelector(".action");
    const table = document.querySelector(".table");
    const changeTableColor = document.querySelector(".changeTableColor");
    
    action.addEventListener("click", onChangeColorTableClick);

    welcome();
    
}