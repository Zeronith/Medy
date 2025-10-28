class UserStatistics extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['questions', 'answers', 'rank', 'badges'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const stats = {
      questions: this.getAttribute('questions') || '0',
      answers: this.getAttribute('answers') || '0',
      rank: this.getAttribute('rank') || '0',
    badges: parseInt(this.getAttribute('badges') || '0', 10),
    };

     let badgeIcons = '';
  for (let i = 0; i < stats.badges; i++) {
    badgeIcons += `<span class="badge-icon"><svg width="40px" height="40px" viewBox="0 0 24 24" fill="purple" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="purple" opacity="0.1"></circle>
          </svg></span>`; // you can replace with your SVG
  }
    this.innerHTML = `
       <section class="statistic">
            <h3>Үзүүлэлт</h3>
            <hr />
            <div class="statistic-grid">
              <div class="q-num">
                <div class="q-txt">
                  <p id="question-txt">Q : Questions</p>
                  <p id="question-num">${stats.questions}</p>
                </div>
              </div>

              <div class="a-num">
                <div class="a-txt">
                  <p id="answer-txt">A : Answer</p>
                  <p id="answer-num">${stats.answers}</p>
                </div>
              </div>

              <div class="r-num">
                <div class="r-txt">
                  <p id="rank-txt">R : Rank</p>
                  <p id="rank-num">${stats.rank}</p>
                </div>
              </div>

              <div class="b-num">
                <div class="b-txt">
                  <p id="badges-txt">B : Badges</p>
                  <p id="badges-num">${stats.badges} ${badgeIcons}</p>
                </div>
              </div>
            </div>
          </section>
    `;
  }
}

customElements.define('user-statistics', UserStatistics);
