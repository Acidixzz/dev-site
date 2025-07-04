/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';

import './index.css';

//Routes
import Home from './routes/home';
import NotFound from './routes/[...404]';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() =>
  <>
    {/* <Nav /> */}
    <Router>
      <Route path="/dev-site" component={Home} /> {/* Home redirects to Education */}
      <Route path="/dev-site/*" component={NotFound} /> {/* 404 fallback */}
    </Router>
    <Footer />
  </>
  , root!);
