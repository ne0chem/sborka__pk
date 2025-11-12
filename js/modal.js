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
