import React from 'react';
// import Sample from './Sample';
// import Pdfcard from './Pdfcard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ScrollablePdf from './ScrollablePdf';
import nihongo from './1.pdf';
import compiler from './2.pdf';

export default function All() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/compiler">Compiler</Link>
          </li>
          <li>
            <Link to="/nihongo">Nihongo</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/compiler">
            <ScrollablePdf pdf={compiler} />
          </Route>
          <Route path="/nihongo">
            <ScrollablePdf pdf={nihongo} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
