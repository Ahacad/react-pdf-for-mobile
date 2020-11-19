import React from 'react';
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
const categories = Object.keys(books);
const values = Object.values(books);

const bok = values[0][0]

export default function All() {
  return (
    <div>
      <Router>
        <ul>
          {categories.map((element) => (
            <li><Link to={`/${element}`}>{ element }</Link></li>
          ))}
        </ul>
        <hr />
        <Switch>
          {categories.map((element, index) => (
            <Route path={`/${element}`}><Category index={index}/></Route>
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
        {values[props.index].map((ele) => (
          <Route path={`${url}/${ele}`}><Onebook pdf={ele} /></Route>
        ))}
      </Switch>
    </div>
  );
}

function Onebook(props) {
  return (
    <div>
      <ScrollablePdf pdf={`/${props.pdf}`} />
    </div>
  );
}
