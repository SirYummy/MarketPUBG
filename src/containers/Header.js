import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <div class="header">
    <header class="nav-bar">
      <div class="w-container">
        <div class="w-row">
          <div class="brand-column w-col w-col-3 w-col-medium-3">
            <a class="w-inline-block" href="index.html">
              <div class="company">Market<br /><br /> PUBG</div>
            </a>
          </div>
          <nav class="nav-column w-col w-col-5 w-col-medium-5 w-hidden-medium w-hidden-small w-hidden-tiny"><a class="nav-link" href="item-explorer.html">ITEM EXPLORER</a><a class="nav-link" href="giveaway.html">GIVEAWAY</a>
            <div class="info w-dropdown" data-delay="0">
              <div class="dropdown-toggle-2 w-clearfix w-dropdown-toggle">
                <div class="info nav-text">INFO</div>
                <div class="dropdown-icon info w-icon-dropdown-toggle"></div>
              </div>
              <nav class="dropdown-list w-dropdown-list"><a class="dropdown-link w-dropdown-link" href="about-us.html">ABOUT US</a><a class="dropdown-link w-dropdown-link" href="blog.html">BLOG</a><a class="dropdown-link w-dropdown-link" href="how-it-works.html">HOW IT WORKS</a></nav>
            </div>
            <div class="support w-dropdown" data-delay="0">
              <div class="dropdown-toggle-2 w-clearfix w-dropdown-toggle">
                <div class="nav-text support">SUPPORT</div>
                <div class="dropdown-icon support w-icon-dropdown-toggle"></div>
              </div>
              <nav class="dropdown-list w-dropdown-list"><a class="dropdown-link w-dropdown-link" href="contact.html">CONTACT</a><a class="dropdown-link w-dropdown-link" href="faq.html">FAQ</a></nav>
            </div>
          </nav>
          <div class="profile-column w-col w-col-4 w-col-medium-4"><a class="nav-link sign-up w-hidden-medium w-hidden-small w-hidden-tiny" href="inventory.html">sell</a>
            <div class="dropdown-2 w-dropdown" data-delay="0">
              <div class="dropdown-2 w-clearfix w-dropdown-toggle"><img class="image-31" src="images/ProfilePic.jpg" />
                <div class="profile">Name</div>
                <div class="dropdown-icon w-icon-dropdown-toggle"></div>
              </div>
              <nav class="dropdown-list-2 w-dropdown-list"><a class="dropdown-link profile w-dropdown-link" href="profile.html">Profile</a><a class="dropdown-link profile w-dropdown-link" href="inventory.html">Inventory</a><a class="dropdown-link profile w-dropdown-link" href="my-orders.html">My Orders</a><a class="dropdown-link profile w-dropdown-link" href="history.html">History</a><a class="dropdown-link profile w-dropdown-link" href="add-funds.html">Add Funds</a><a class="dropdown-link profile w-dropdown-link" href="cashout.html">Cashout</a><a class="dropdown-link profile w-dropdown-link" href="referral.html">Refferal</a><a class="dropdown-link profile w-dropdown-link" href="api.html">API</a><a class="dropdown-link profile w-dropdown-link">Logout</a></nav>
            </div>
          </div>
        </div>
      </div>
      <div class="div-block-5 w-clearfix">
        <div class="form-block w-form">
          <form class="form" data-name="Email Form" id="email-form" name="email-form">
            <div class="div-block-20 w-clearfix">
              <input class="text-field w-input" data-name="Name" id="name" maxlength="256" name="name" placeholder="Search item or category" type="text" />
              <input class="submit-button w-button" type="submit" value="OK" />
            </div>
            <div class="dropdown-3 phone w-dropdown" data-delay="0">
              <div class="dropdown-toggle-3 w-dropdown-toggle w-hidden-main">
                <div class="icon w-icon-dropdown-toggle"></div>
                <div class="text-block-25">MENU</div>
              </div>
              <nav class="w-dropdown-list"><a class="dropdown-link phone w-dropdown-link" href="#">Item Explorer</a><a class="dropdown-link phone w-dropdown-link" href="#">GIVEAWAY</a><a class="dropdown-link phone w-dropdown-link" href="#">ABOUT US</a><a class="dropdown-link phone w-dropdown-link" href="#">BLOG</a><a class="dropdown-link phone w-dropdown-link" href="#">HOW IT WORKS</a><a class="dropdown-link phone w-dropdown-link" href="#">CONTACT</a><a class="dropdown-link phone w-dropdown-link" href="#">FAQ</a></nav>
            </div>
          </form>
          <div class="success-message-2 w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </header>
  </div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Header;
