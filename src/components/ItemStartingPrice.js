import React from 'react';

class ItemStartingPrice extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default ItemStartingPrice;
