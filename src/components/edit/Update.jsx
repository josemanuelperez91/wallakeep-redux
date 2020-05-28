import React from 'react';
import './Edit.css';
import Form from './Form';
import { Link } from 'react-router-dom';

class Update extends React.Component {
  onUpdate = (adData) => {
    this.props.updateAd(adData);
  };

  render() {
    return (
      <div className="Edit">
        <Form
          onSubmit={this.onUpdate}
          adIdentifier={this.props.match.params.ID}
        ></Form>
        <button>
          <Link to="/home">Home</Link>
        </button>
      </div>
    );
  }
}

export default Update;
