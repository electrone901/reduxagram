import React from 'react'

const PhotoGrid = React.createClass(
  {
    render() {
      return (
      <div>

        <h2>PhotoGrid</h2>
        <pre>
          {JSON.stringify(this.props.posts, null,' ')}
        </pre>
      </div>
    )}
  }
)
export default PhotoGrid
