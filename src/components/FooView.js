import React, { Component, PropTypes } from 'react';

export default class FooView extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.incrementFoo();
  }

  render() {
    return (
      <div className="view-container">
        <div>You're visiting the 'Foo' view.</div>
        <div className="counter-container">
          <div className="counter-num-label">{this.props.foo}</div>
          <br />
          <div className="counter-buttons">
            <button onClick={() => {
              this.handleIncrement();
            }}>+
            </button>
          </div>
        </div>
      </div>
    );
  }
}

FooView.propTypes = {
  foo: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
