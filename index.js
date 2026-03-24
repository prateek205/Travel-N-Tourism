let elements = document.querySelectorAll(
  ".slide-left, .zoom-in, .slide-right, .zoom-out, .fade-up",
);

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el)=>observer.observe(el));
