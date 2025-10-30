class Login extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="login">
        <h2>Нэвтрэх</h2>
        <div id="login-form">
          <div class="form-group">
            <label for="sisi-id">SISI ID</label>
            <input type="text" id="sisi-id" name="sisi_id" placeholder="Таны SISI ID" required />
          </div>

          <div class="form-group">
            <label for="password">Нууц үг</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required />
          </div>

          <div class="form-options">
            <label class="remember">
              <input type="checkbox" name="remember_me" /> Намайг сана
            </label>
          </div>

          <button id="submit-btn" type="button">Нэвтрэх</button>
        </div>
      </section>
    `;

    const submitBtn = this.querySelector("#submit-btn");

    submitBtn.addEventListener("click", async () => {
      const sisi_id = this.querySelector("#sisi-id").value.trim();
      const password = this.querySelector("#password").value.trim();

      if (!sisi_id || !password) {
        alert("SISI ID болон нууц үгээ оруулна уу");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sisi_id, password }),
        });

        if (response.ok) {
          window.location.href = "home.html";
        } else {
          alert("Нэвтрэлт амжилтгүй. ID эсвэл нууц үг буруу байна.");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Сервертэй холбогдоход алдаа гарлаа.");
      }
    });
  }
}

customElements.define("login-form", Login);
