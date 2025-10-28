document.addEventListener("DOMContentLoaded", () => {
  const askBtn = document.querySelector("#ask-question-btn");
  const askModal = document.querySelector("ask-question-modal");

  if (askBtn && askModal) {
    askBtn.addEventListener("click", () => {
      askModal.show(); 
    });
  }
});
