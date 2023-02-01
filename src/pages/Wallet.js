import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return <div><h2>TrybeWallet</h2></div>;
  }
}

export default connect()(Wallet);
