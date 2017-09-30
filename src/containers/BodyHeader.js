import React from 'react'

class BodyHeader extends React.Component {
  constructor() {
    super()
    this.state = { someKey: 'someValue' }
  }

  render() {
    return ( 
    <div class="body-header" style={{
        marginBottom : '-5px'
    }}>
    <div class="hero section">
      <div class="banner-container w-container">
        <div class="slider w-hidden-medium w-hidden-small w-hidden-tiny w-slider" data-animation="outin" data-autoplay="1" data-delay="7000" data-disable-swipe="1" data-duration="2000" data-infinite="1">
          <div class="mask w-slider-mask">
            <div class="slide-2 w-slide"><img sizes="(max-width: 934px) 100vw, 934px" src="images/Untitled-1-Recovered.jpg" srcset="images/Untitled-1-Recovered-p-500.jpeg 500w, images/Untitled-1-Recovered-p-800.jpeg 800w, images/Untitled-1-Recovered.jpg 934w" /></div>
            <div class="slide w-slide"><span><strong xmlns="http://www.w3.org/1999/xhtml" class="important-text">SPECIAL<br /><br />OFFER<br /></strong></span></div>
          </div>
          <div class="left-arrow w-slider-arrow-left">
            <div class="w-icon-slider-left"></div>
          </div>
          <div class="right-arrow w-slider-arrow-right">
            <div class="w-icon-slider-right"></div>
          </div>
          <div class="slide-nav w-round w-slider-nav"></div>
        </div>
      </div>
  </div>
    </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' })
  }
}

export default BodyHeader
