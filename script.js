const favorites = document.querySelectorAll(".favorite");
favorites.forEach((favorite) => favorite.addEventListener("click", like));
function like() {
  this.style.filter =
    this.style.filter === ""
      ? "invert(23%) sepia(26%) saturate(5126%) hue-rotate(318deg) brightness(96%) contrast(98%)"
      : "";
}
