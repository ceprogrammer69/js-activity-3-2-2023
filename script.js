let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    let page = button.dataset.page;
    window.location.href = page;
  });
}