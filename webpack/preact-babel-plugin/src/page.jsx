import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Theme } from './context.jsx';

export function Page() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Theme.Consumer>
        {theme => <div>Theme: {theme}</div>}
      </Theme.Consumer>
        <div>Counter122: {value}</div>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
}