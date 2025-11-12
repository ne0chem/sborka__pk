const sandForm = () => {
  console.log("sandForm");

  const form = document.querySelector(".modal");

  console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = form.querySelector("input[type=text]");
    const tel = form.querySelector("input[type=tel]");
    const email = form.querySelector("input[type=email]");

    const sendObj = {
      name: text.value,
      tel: tel.value,
      email: email.value,
    };
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        alert("Форма успешно отправлена!");
      })
      .catch((error) => {
        alert(
          "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
        );
      })
      .finally(() => {
        form.reset();
        alert("Форма очищена");
      });
  });
};
sandForm();
