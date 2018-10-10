import React from 'react';
import withSecretToLife from './HOC';
import ReactDOM from 'react-dom';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}.
  </div>
);

const WrappedComponent = withSecretToLife(DisplayTheSecret);

ReactDOM.render(<WrappedComponent />, document.getElementById('main'))