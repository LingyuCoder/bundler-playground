import { render, h, createContext } from 'preact';
import { Page } from './page.jsx';
import { Theme } from './context.jsx';

function App(a, b) {
  const ctx = createContext();
  return (
    <Theme.Provider value="dark">
     <Page></Page>
    </Theme.Provider>
  );
}

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}