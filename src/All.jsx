import React from 'react';
// import Sample from './Sample';
// import Pdfcard from './Pdfcard';
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  //Link,
  //useRouteMatch,
  //useParams,
//} from 'react-router-dom';
import ScrollablePdf from './ScrollablePdf';

//function importall(r) {
  //let pdfbooks = {};
  //r.keys().map((item, index) => pdfbooks[item.replace('./', '')] = r(item) );
  //return pdfbooks;
//}
//const pdfbooks = importall(require.context('../books', true, /\.pdf$/));

import books from './books.json';
const categories = Object.keys(books);
const values = Object.values(books);

console.log(categories)
console.log(values)

const bok = values[0][0]
console.log(bok)

export default function All() {
  return (
    <div>
      <ScrollablePdf pdf={bok} />
    </div>
  );
}
      //<Router>
        //<ul>
          //{keys.map((key) => (
            //<li><Link to={`/${key}`}>{key}</Link></li>
          //))}
        //</ul>
        //<hr />
        //<Switch>
          //{keys.map((key, index) => (
            //<Route path={`/${key}`}>
              //<Category index={index} />
            //</Route>
          //))}
        //</Switch>
      //</Router>

//function Category(props) {
  //const { path, url } = useRouteMatch();
  //return (
    //<div>
      //<ul>
        //{values[props.index].map((element) => (
          //<li><Link to={`${url}/${element}`}>{ element }</Link></li>
        //))}
      //</ul>
      //<Switch>
      //</Switch>
    //</div>
  //);
//}

//function Onebook(props) {
  //let { topicId } = useParams();

  //return (
    //<div>
      //<ScrollablePdf pdf={props.pdf} />
    //</div>
  //);
//}
