
document.addEventListener("DOMContentLoaded", () => {


  const tabButtons = document.querySelectorAll("[data-tab]");
  const tabPanels = document.querySelectorAll("[data-panel]");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      tabButtons.forEach(b => b.disabled = false);
      btn.disabled = true;
      tabPanels.forEach(p => p.style.display = (p.dataset.panel === tab ? "block" : "none"));
    });
  });


  const msg = document.querySelector("#message");
  const counter = document.querySelector("#counter");
  if (msg && counter) {
    const update = () => counter.textContent = `Символов: ${msg.value.length}`;
    msg.addEventListener("input", update);
    update();
  }


  document.querySelectorAll("form[data-ajax]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const notice = form.querySelector(".notice");
      if (notice) {
        notice.style.display = "block";
        notice.textContent = "Данные отправлены (демо).";
      }
      form.reset();
      if (counter) counter.textContent = "Символов: 0";
    });
  });

});