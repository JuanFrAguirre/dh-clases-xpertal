let btncito = document.querySelector("#clickMe");
window.addEventListener("load", () => {
  let paragraphs = document.querySelectorAll("p.paragraph");

  btncito.classList.add("white-text");

  console.log([btncito]);

  paragraphs.forEach((p) => p.classList.remove("red-text-paragraph"));

  btncito.addEventListener("mouseover", () => {
    paragraphs.forEach(
      (paragraph) =>
        // paragraph.classList.add("red-text-paragraph")
        (paragraph.style.color = "red")
    );
  });

  btncito.addEventListener("mouseout", () => {
    paragraphs.forEach(
      (p) =>
        // p.classList.remove("red-text-paragraph")
        (p.style.color = "black")
    );
  });
});

let saludar = () => {
  console.log("hola");
  btncito.classList.toggle("red-text-paragraph");
};
