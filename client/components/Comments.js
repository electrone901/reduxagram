import React from 'react'

const Comments = React.createClass({
  renderComment(comment, i){
    console.log(comment)
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  },
  render() {
    return (
    <div className='comments'>

      {this.props.postComments.map(this.renderComment)}
      <form ref='commentForm' className='comment-form'>
        <input type='text' />
      </form>
    </div>
  )}
})

export default Comments
