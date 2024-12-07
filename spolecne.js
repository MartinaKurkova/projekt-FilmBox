const hamMenu = document.querySelector("#menu-tlacitko");
const menuPolozky = document.querySelector("#menu-polozky");
const ikonka = hamMenu.querySelector("i"); 

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  menuPolozky.classList.toggle("show");


  if (menuPolozky.classList.contains("show")) {
    ikonka.classList.remove("fa-bars");
    ikonka.classList.add("fa-xmark");
  } else {
    ikonka.classList.remove("fa-xmark");
    ikonka.classList.add("fa-bars");
  }
});

