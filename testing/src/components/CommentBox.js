import React from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

class CommentBox extends React.Component {
  state = {
    comment: '',
  };

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
            name="comment"
            id="comment"
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button id="fetchComments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </>
    );
  }
}

export default connect(null, { saveComment, fetchComments })(CommentBox);
