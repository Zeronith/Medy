class LeaderboardSection extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return [
      'gold', 'gold-aura',
      'silver', 'silver-aura',
      'bronze', 'bronze-aura'
    ];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const users = [
      {
        medal: './assets/golden-medal.png',
        avatar: './assets/avatar1.png',
        name: this.getAttribute('gold') || '—',
        aura: this.getAttribute('gold-aura') || '0'
      },
      {
        medal: './assets/silver-medal.png',
        avatar: './assets/avatar2.png',
        name: this.getAttribute('silver') || '—',
        aura: this.getAttribute('silver-aura') || '0'
      },
      {
        medal: './assets/bronze-medal.png',
        avatar: './assets/avatar3.png',
        name: this.getAttribute('bronze') || '—',
        aura: this.getAttribute('bronze-aura') || '0'
      }
    ];

    this.innerHTML = `
      <section class="leaderboard">
        <h3>Leaderboard</h3>
        <hr />
        <ul>
          ${users.map((u, i) => `
            <li class="top${i + 1}">
              <div class="rank-left">
                <img src="${u.medal}" alt="medal" class="medal" />
                <img src="${u.avatar}" alt="avatar" class="avatar" />
                <div class="info">
                  <span class="name">${u.name}</span>
                  <span class="aura">${u.aura} aura</span>
                </div>
              </div>
              <svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9.5 7L14.5 12L9.5 17"
                      stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  }
}

customElements.define('leaderboard-section', LeaderboardSection);
