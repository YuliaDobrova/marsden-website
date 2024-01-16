let item = document.querySelectorAll(".nav-bar .container a");
item.forEach((link) => {
  link.addEventListener("click", (e) => {
    item.forEach((links) => {
      links.classList.remove("active");
    });
    link.setAttribute("class", "active");
  });
});

var typedn = new Typed(".typing", {
  strings: [
    "Director of Student Services",
    "Director of Student Affairs",
    "Library Division Manager",
    "Teaching Assistant",
    "Sales Manager",
    "Student Librarian",
  ],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});
