import React from 'react';
import { render } from 'react-dom';

const App = (): JSX.Element => {
  return <h1>Hello, I am React</h1>;
};

render(<App />, document.getElementById('root'));
