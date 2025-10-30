class CommentThread extends HTMLElement {
  constructor() {
    super();
    this.comments = [];
  }

  connectedCallback() {
    const dataAttr = this.getAttribute('data-comments');
    if (dataAttr) {
      try {
        this.comments = JSON.parse(dataAttr);
      } catch (e) {
        console.error('Invalid JSON in data-comments:', e);
      }
    }
    this.render();
  }

  renderComments(comments, isReply = false) {
    return comments.map(comment => `
      <div class="comment${isReply ? ' reply' : ''}">
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="purple" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="purple" opacity="0.1"></circle>
        </svg>
        <div class="comment-body">
          <div class="comment-header">${comment.name}</div>
          <div class="comment-text">${comment.text}</div>
          <div class="comment-footer">
            <span>${comment.time}</span>
            <button class="upvote">Upvote (${comment.upvotes})</button>
            <button class="downvote">Downvote (${comment.downvotes})</button>
            <button class="reply-btn">Reply (${comment.replies?.length || 0})</button>
          </div>
        </div>
      </div>
      ${comment.replies?.length ? comment.replies.map(r => this.renderComments([r], true)).join('') : ''}
    `);
  }

  render() {
    this.innerHTML = `
      <style>
       
        
  .comment-section {
  
  margin-top: var(--spacing-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  }
  .comment {
    display: flex;
    margin-bottom: 15px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
  }

  .comment img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .comment-body {
    flex: 1;
  }

  .comment-header {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .comment-text {
    display: inline-block;
    margin-bottom: 5px;
    background-color: rgb(244, 241, 241);
    border-radius: 10px;
  }

  .comment-footer {
    font-size: 12px;
    color: #65676b;
  }

  .reply {
    margin-left: 50px;
  }
      </style>
      <div class="comment-section">
        ${this.renderComments(this.comments).join('')}
      </div>
    `;

    // Attach upvote/downvote events
    this.querySelectorAll('.upvote').forEach((btn, i) => {
      btn.addEventListener('click', () => this.incrementVote(i, 'upvotes'));
    });
    this.querySelectorAll('.downvote').forEach((btn, i) => {
      btn.addEventListener('click', () => this.incrementVote(i, 'downvotes'));
    });
  }

  incrementVote(index, type) {
    const flatComments = this.flattenComments(this.comments);
    flatComments[index][type]++;
    this.render();
  }

  flattenComments(comments) {
    let result = [];
    comments.forEach(c => {
      result.push(c);
      if (c.replies?.length) result = result.concat(this.flattenComments(c.replies));
    });
    return result;
  }
}

customElements.define('comment-thread', CommentThread);
