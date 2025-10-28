class Login extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="login">
            <h2>Нэвтрэх</h2>
            <!-- <form id="login-form" autocomplete="off"> -->
            <div id="login-form">
              <div class="form-group">
                <label for="sisi-id">SISI ID</label>
                <input
                  type="text"
                  id="sisi-id"
                  name="sisi_id"
                  placeholder="Таны SISI ID"
                  required
                />
              </div>

              <div class="form-group">
                <label for="password">Нууц үг</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div class="form-options">
                <label class="remember">
                  <input type="checkbox" name="remember_me" />
                  Намайг сана
                </label>
              </div>

              <a href="./home.html">
                <button id="submit-btn">Нэвтрэх</button>
              </a>
            </div>
          </section>
    `;


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

customElements.define("login-form", Login);
