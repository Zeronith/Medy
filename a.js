class CommentItem extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['author', 'class-name', 'date', 'comment', 'upvotes', 'downvotes', 'replies'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const data = {
      authorName: this.getAttribute('author') || 'Anonymous',
      authorClass: this.getAttribute('class-name') || 'Unknown',
      commentDate: this.getAttribute('date') || 'Unknown date',
      comment: this.getAttribute('comment') || 'default comment',
      upvotes: this.getAttribute('upvotes') || '0',
      downvotes: this.getAttribute('downvotes') || '0',
      replies: this.getAttribute('replies') || '0'
    };

    this.innerHTML = `
      <div class="comment-item">
        <div class="comment-item-first-layer">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="purple" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="purple" opacity="0.1"></circle>
          </svg>

          <div class="name-class-date">
             <div class="name-and-class">
            <span id="name">${data.authorName}</span>
                          <span>·</span>
            <span id="class">${data.authorClass}</span>
            </div>
            <span id="date">${data.commentDate}</span>
            </div>

          <div class="pzd">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <circle cx="7" cy="12" r="0.5" stroke="#000" />
              <circle cx="12" cy="12" r="0.5" stroke="#000" />
              <circle cx="17" cy="12" r="0.5" stroke="#000" />
            </svg>
          </div>
        </div>

        <span id="comment">${data.comment}</span>

        <div class="comment-item-second-layer">
          <div class="comment-up-down-vote">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M7 14.5L12 9.5L17 14.5" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${data.upvotes}</span>

            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M17 9.5L12 14.5L7 9.5" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${data.downvotes}</span>
          </div>

          <div class="reply-count">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 1H0V13H5L8 16L11 13H16V1ZM3 6H5V8H3V6ZM9 6H7V8H9V6ZM13 6H11V8H13V6Z" fill="#000"/>
            </svg>
            <span>${data.replies}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('comment-item', CommentItem);
