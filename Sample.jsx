import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// import './Sample.less';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class Sample extends Component {
  state = {
    file: './1.pdf',
    numPages: null,
    pageNumber: 1,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  previousPage() {
  this.setState((state) => {
    return { pageNumber: state.pageNumber - 1 };
  });
  }

  nextPage() {
  this.setState(state => ({
    pageNumber: state.pageNumber + 1,
  }))
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    return (
      <div className="Example">
        <div className="Example__container__document">
          <Document
            file={this.state.file}
            onLoadSuccess={this.onDocumentLoadSuccess}
            options={options}
          >
            <Page
              pageNumber={this.state.pageNumber}
            />
          </Document>
        </div>
        <div>
          <p>
            {this.state.pageNumber}
          </p>
          <button
            onClick={this.previousPage}
          >
              previous
          </button>
          <button
            onClick={this.nextPage}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}
