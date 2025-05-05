let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

const scrollAmount = scrollContainer.clientWidth;

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.style.scrollBehavior = "auto";

  scrollContainer.scrollLeft += evt.deltaY;
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";

  if (
    Math.ceil(scrollContainer.scrollLeft + scrollContainer.clientWidth) >=
    scrollContainer.scrollWidth
  ) {
    scrollContainer.scrollLeft = 0;
  } else {
    scrollContainer.scrollLeft += scrollContainer.clientWidth;
  }
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";

  // If reached the start, go to end
  if (scrollContainer.scrollLeft === 0) {
    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
  } else {
    scrollContainer.scrollLeft -= 900;
  }
});
