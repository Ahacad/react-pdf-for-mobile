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
            <Route path={`/${key}`}>
              <Category index={index} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

function Category(props) {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        {values[props.index].map((element) => (
          <li><Link to={`${url}/${element}`}>{ element }</Link></li>
        ))}
      </ul>
      <Switch>
      </Switch>
    </div>
  );
}

function Onebook(props) {
  let { topicId } = useParams();

  return (
    <div>
      <ScrollablePdf pdf={props.pdf} />
    </div>
  );
}
