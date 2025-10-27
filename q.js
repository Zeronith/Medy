class QuestionCard extends HTMLElement {
  constructor() {
    super();
  }
 static get observedAttributes() {
    return ['author', 'clas-name', 'date', 'tags', 'title', 'description', 'votes', 'comments'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
  connectedCallback() {
    this.render();
  }

  render() {
    
    const questionData = {
      authorName: this.getAttribute('author') || 'Anonymous',
     authorClass: this.getAttribute('class-name') || 'Unknown',
      postDate: this.getAttribute('date') || 'Today',
      tags: (this.getAttribute('tags') || '').split(','),
      title: this.getAttribute('title') || '',
      description: this.getAttribute('description') || '',
      voteCount: this.getAttribute('votes') || '0',
      commentCount: this.getAttribute('comments') || '0'
    };

    this.innerHTML = `
    <article class="q">
      <div class="q-first-layer">
        <div class="left-layer-part">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="purple" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="purple" opacity="0.1"></circle>
          </svg>
            <div class="name-class-date">
             <div class="name-and-class">
            <span id="name">${questionData.authorName}</span>
                          <span>·</span>

            <span id="class">${questionData.authorClass}</span>
            </div>
            <span id="date">${questionData.postDate}</span>
            </div>
         
          <div class="tags">
            ${questionData.tags.map(tag => `<span>${tag.trim()}</span>`).join('')}
          </div>
        </div>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
          <circle cx="7" cy="12" r="0.5" stroke="#000"/>
          <circle cx="12" cy="12" r="0.5" stroke="#000"/>
          <circle cx="17" cy="12" r="0.5" stroke="#000"/>
        </svg>
      </div>

      <div class="q-second-layer">
        <h4 id="q-title">${questionData.title}</h4>
        <span id="q-description">${questionData.description}</span>
      </div>
      <hr/>
      <div class="q-third-layer">
                <div class="up-down-vote">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 14.5L12 9.5L17 14.5"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>${questionData.voteCount}</span>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <!-- <rect width="24" height="24" fill="white" /> -->
                    <path
                      d="M17 9.5L12 14.5L7 9.5"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div class="comment-count">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 1H0V13H5L8 16L11 13H16V1ZM3 6H5V8H3V6ZM9 6H7V8H9V6ZM13 6H11V8H13V6Z"
                      fill="#000000"
                    />
                  </svg>
                  <span>${questionData.commentCount}</span>
                </div>
                <div class="saved">
                  <svg
                    id="saved"
                    width="20px"
                    height="20px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <title>save-floppy</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set"
                        sketch:type="MSLayerGroup"
                        transform="translate(-152.000000, -515.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M171,525 C171.552,525 172,524.553 172,524 L172,520 C172,519.447 171.552,519 171,519 C170.448,519 170,519.447 170,520 L170,524 C170,524.553 170.448,525 171,525 L171,525 Z M182,543 C182,544.104 181.104,545 180,545 L156,545 C154.896,545 154,544.104 154,543 L154,519 C154,517.896 154.896,517 156,517 L158,517 L158,527 C158,528.104 158.896,529 160,529 L176,529 C177.104,529 178,528.104 178,527 L178,517 L180,517 C181.104,517 182,517.896 182,519 L182,543 L182,543 Z M160,517 L176,517 L176,526 C176,526.553 175.552,527 175,527 L161,527 C160.448,527 160,526.553 160,526 L160,517 L160,517 Z M180,515 L156,515 C153.791,515 152,516.791 152,519 L152,543 C152,545.209 153.791,547 156,547 L180,547 C182.209,547 184,545.209 184,543 L184,519 C184,516.791 182.209,515 180,515 L180,515 Z"
                          id="save-floppy"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
    </article>
  `;

  }
}

customElements.define('question-card', QuestionCard);
