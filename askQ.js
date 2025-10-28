class AskQuestionModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="ask-modal">
        <div class="ask-modal-content">
          <button class="close-btn">&times;</button>
          <h2>Асуулт асуух</h2>

          <label for="class-select">Класс сонгох:</label>
          <select id="class-select">
            <option value="">-- ICSI201 --</option>
            <option value="frontend">ICSI202</option>
            <option value="backend">PHIL102</option>
            <option value="design">ICSI169</option>
            <option value="ai">ICSI6969</option>
          </select>

          <label for="question-head">Гарчиг:</label>
          <input type="text" id="question-head" placeholder="Гарчиг оруулна уу">

          <label for="question-desc">Тайлбар:</label>
          <textarea id="question-desc" placeholder="Асуултын дэлгэрэнгүй бичээрэй..."></textarea>

          <div class="option-row">
            <label><input type="checkbox" id="anonymous-check"> Нэрээ нууцлах</label>
            <label><input type="checkbox" id="disable-comments"> Сэтгэгдэл хаах</label>
          </div>

          <div class="btn-row">
            <button id="cancel-question">Болих</button>
            <button id="publish-question">Нийтлэх</button>
          </div>
        </div>
      </div>
    `;

    const modal = this.querySelector(".ask-modal");
    const closeBtn = this.querySelector(".close-btn");
    const cancelBtn = this.querySelector("#cancel-question");

    this.show = () => {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closeModal);
    cancelBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

customElements.define("ask-question-modal", AskQuestionModal);
