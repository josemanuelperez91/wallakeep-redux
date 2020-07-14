import React from 'react';
import './Home.css';
import Filter from './connectedFilter';
import AdsGrid from './connectedAdsGrid';
import Navbar from './connectedNavbar';

import { Link } from 'react-router-dom';
import { getTags } from '../../services/API';

class Home extends React.Component {
  state = {
    tags: [],
  };

  /**
   * AbortController is used to, in case
   * the session cookie is not valid and the API
   * returns a 'Not logged in error' , prevent the fetching
   * in componentDidMount to produce warnings in React due to 'memory leaks'
   */
  controller = new AbortController();
  componentWillUnmount() {
    this.controller.abort();
  }
  componentDidMount() {
    getTags().then((result) => {
      this.setState({
        tags: result,
      });
    });
  }

  render() {
    return (
      <div className="Home">
        <Navbar></Navbar>

        <Filter tags={this.state.tags} onSubmit={this.onFilter}></Filter>
        <button id="createAd" className="greenButton">
          <Link to="create">New Ad</Link>
        </button>
        <AdsGrid></AdsGrid>
      </div>
    );
  }
}
export default Home;
