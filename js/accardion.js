const accardion = () => {
  const contents = document.querySelectorAll(".program-line__content");
  contents.forEach((elem) => {
    const title = elem.querySelector(".program-line__title");
    const descrt = elem.querySelector(".program-line__descr");

    title.addEventListener("click", () => {
      descrt.classList.toggle("active");
    });
  });
};
accardion();
