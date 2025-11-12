const Skroll = () => {
  const navbar = document.querySelector(".header__nav");
  const links = navbar.querySelectorAll(".header__link");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      event.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));

      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    });
  });
};
Skroll();
