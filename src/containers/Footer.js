import React from 'react'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = { someKey: 'someValue' }
  }

  render() {
    return (<footer class="footer section">
                <div class="w-container">
                    <div class="w-row">
                        <div class="w-col w-col-6">
                            <div class="footer-text">Gallio template.&nbsp;</div>
                        </div>
                        <div class="right-footer-col w-col w-col-6">
                            <a class="social-icon w-inline-block" href="http://www.twitter.com/webflowapp" target="_blank">
                                <img src="images/14-social-twitter.png" width="20" />
                            </a>
                            <a class="social-icon w-inline-block" href="http://facebook.com/webflow" target="_blank">
                                <img src="images/14-social-facebook.png" width="20" />
                            </a>
                            <a class="social-icon w-inline-block" href="mailto:support@webflow.com?subject=Hello">
                                <img src="images/14-social-email.png" width="20" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
  )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' })
  }
}

export default Footer
