import React, { Component } from 'react'

class PictureGallery extends Component {
  state = {
    sources:""
  }

  render() {
    return (
      <div>
        <img src={this.props.sources} alt=""></img>
      </div>
    )
  }
}

export default PictureGallery

