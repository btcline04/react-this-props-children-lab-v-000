import React from 'react';

export default class Invitation extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>You've been invited!</h1>
        </div>
        <div>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}
