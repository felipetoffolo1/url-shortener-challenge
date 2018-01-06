import React, { Component } from 'react';
import UrlInput from '../components/UrlInput';
import * as UrlActions from "../actions/UrlActions";
import { connect } from "react-redux";

import 'bulma';

/**
 * Main class of the app
 * @class
 */
class App extends Component {

  /** dispatch
   * @param {string} url - url to be shorten
   * @todo do a url string validation
   */
  fetchUrl(url){
    if(url){
      this.dispatch(UrlActions.fetchUrl(url)).then(res => console.log(res));
    }
  }
  render() {
    return <div className="App">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Url Shortener</h1>
              <h2 className="subtitle">Hero subtitle</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container has-text-centered">
            <UrlInput onClick={this.fetchUrl} longUrl={this.props.longUrl} />
            {this.props.shortUrl && <a href={this.props.shortUrl} target="blank">
                {this.props.shortUrl}
              </a>}
          </div>
        </section>
      </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    shortUrl: state.url.currentShortUrl,
    longUrl: state.url.currentLongUrl
  };
};

export default connect(mapStateToProps)(App);
