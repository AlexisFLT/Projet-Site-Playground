const reveal = document.querySelector("#reveal");
window.addEventListener("pageshow", () => {
  reveal.classList.toggle("revealVisible");
});