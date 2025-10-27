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
        rank: 'gold',
        name: this.getAttribute('gold') || '—',
        aura: this.getAttribute('gold-aura') || '0',
        medal: 'golden-medal.png',
        avatar: 'avatar1.png',
      },
      {
        rank: 'silver',
        name: this.getAttribute('silver') || '—',
        aura: this.getAttribute('silver-aura') || '0',
        medal: 'silver-medal.png',
        avatar: 'avatar2.png',
      },
      {
        rank: 'bronze',
        name: this.getAttribute('bronze') || '—',
        aura: this.getAttribute('bronze-aura') || '0',
        medal: 'bronze-medal.png',
        avatar: 'avatar3.png',
      },
    ];

    this.innerHTML = `
      <section class="leaderboard">
        <h3>Leaderboard</h3>
        <hr />
        <ul>
          ${users.map((u, i) => `
            <li class="top${i + 1}">
              <div class="rank-left">
                <img src="./assets/${u.medal}" alt="${u.rank}" class="medal" />
                <img src="./assets/${u.avatar}" alt="avatar" class="avatar" />
                <div class="info">
                  <span class="name">${u.name}</span>
                  <span class="aura">${u.aura} aura</span>
                </div>
              </div>
              <svg
                class="arrow"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.5 7L14.5 12L9.5 17"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  }
}

customElements.define('leaderboard-section', LeaderboardSection);
