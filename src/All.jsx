import React from 'react';
// import Sample from './Sample';
// import Pdfcard from './Pdfcard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import ScrollablePdf from './ScrollablePdf';
import nihongo from '../books/nihongo/1.pdf';
import compiler from '../books/compiler/2.pdf';
import unix from '../books/unix/unix.pdf';
import books from './books.json';

const keys = Object.keys(books);
const values = Object.values(books);

export default function All() {
  return (
    <div>
      <Router>
        <ul>
          {keys.map((key) => (
            <li><Link to={`/${key}`}>{key}</Link></li>
          ))}
        </ul>
        <hr />
        <Switch>
          {keys.map((key, index) => (
            <Route path={key}>a</Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

function category(props) {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        {values[props.index].forEach((element) => (
          <li><Link to={`${url}/${element}`}>{element}</Link></li>
        ))}
      </ul>
      <Switch>
        {values[props.index].forEach((element) => (
          <Route></Route>
        )}
        <Route path="/compiler">
          <ScrollablePdf pdf={compiler} />
        </Route>
      </Switch>
    </div>
  )
}

function onebook() {
  let {topicId} = useParams();

  return (
    <div>
      <ScrollablePdf pdf={} />
    </div>
  )
}
