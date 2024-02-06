function menu() {
  let menu = document.getElementById("pages");
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("expanded");
  let isExpanded = navbar.classList.contains("expanded");
  menu.style.display = isExpanded ? "block" : "none";
}
