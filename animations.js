function start_animation() {
  const elements = document.querySelectorAll("[ data-anim ]");
  const options = {
    root: null,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        entry.target.classList.add("animate");
        setTimeout(() => observer.unobserve(entry.target), 200);
      }
    });
  }, options);

  // ADD ANIMATION TO EACH ELEMENT BASED ON DATA-ANIM
  elements.forEach((el) => {
    const animation = el.getAttribute("data-anim");
    el.classList.add(animation);
  });
  elements.forEach((el) => {
    observer.observe(el);
  });
}

start_animation();
