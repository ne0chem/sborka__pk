const Modal = () => {
  const modalWindow = document.querySelector(".modal");

  const buttonModals = document.querySelectorAll(".modall__button");

  const closeModal = document.querySelector(".modal__close");

  const body = document.querySelector("body");

  buttonModals.forEach((item) => {
    item.addEventListener("click", () => {
      modalWindow.style.display = "flex";
      body.classList.add("noscroll");
    });
  });

  modalWindow.addEventListener("click", (e) => {
    const isModal = e.target.closest(".modal__inner");

    if (!isModal) {
      modalWindow.style.display = "none";
      body.classList.add("noscroll");
    }
  });

  closeModal.addEventListener("click", () => {
    modalWindow.style.display = "none";
    body.classList.add("noscroll");
  });
};
Modal();

// Функции для бургер-меню
function toggleMobileMenu() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const body = document.body;

  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}

function closeMobileMenu() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const body = document.body;

  burger.classList.remove("active");
  mobileMenu.classList.remove("active");
  body.style.overflow = "";
}

// Инициализация
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  if (burger) {
    burger.addEventListener("click", toggleMobileMenu);
  }

  // Закрытие меню при клике на ссылку
  const mobileLinks = document.querySelectorAll(".mobile-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Закрытие меню при клике вне его области
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", function (e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });
  }
});
