const images = [
  "static/airplane.webp",
  "static/sea.webp",
  "static/sunset.webp",
  "static/palm_trees.webp",
  "static/starry_sky.webp",
];

const slides1 = document.querySelectorAll(".slide1");

slides1.forEach((slide1, index) => {
  if (images[index]) {
    slide1.style.backgroundImage = `url(${images[index]})`;
  }
});

slides1.forEach((slide1) => {
  slide1.addEventListener("click", () => {
    clearActiveClasses(slides1, slide1);

    slide1.classList.add("active");

    const index = Array.from(slides1).indexOf(slide1);

    if (index >= 0 && images[index]) {
      const originalImage = images[index];
      const newImage = getSecondImage(originalImage);
      slide1.style.backgroundImage = `url(${newImage})`;
    }
  });
});

function clearActiveClasses(elements, excludeElement) {
  elements.forEach((element) => {
    if (element !== excludeElement) {
      element.classList.remove("active");
      const index = Array.from(slides1).indexOf(element);
      if (index >= 0 && images[index]) {
        element.style.backgroundImage = `url(${images[index]})`;
      }
    }
  });
}
