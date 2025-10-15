
const searchBox = document.querySelector(".search-box input");

if (searchBox) {
  searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = searchBox.value.trim();
      if (query) {
        alert(` Searching for: ${query}`);
      } else {
        alert("Please enter a restaurant or dish name.");
      }
    }
  });
}

 
let move = 0;
const carousel = document.querySelectorAll(".carousel-inner"); 

document.querySelector(".carousel-control-next").addEventListener("click", () => {
  move += 300;
  carousel.scrollTo({ left: move, behavior: "smooth" });
});

document.querySelector(".carousel-control-prev").addEventListener("click", () => {
  move -= 300;
  if (move < 0) move = 0;
  carousel.scrollTo({ right : move, behavior: "smooth" });
}); 




document.queryAllSelector(".footer-link").forEach(link =>
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  })
);







