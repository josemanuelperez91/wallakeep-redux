import React from 'react';
import './Edit.css';
import Form from './Form';
import { Link } from 'react-router-dom';

class Create extends React.Component {
  onCreate = (adData) => {
    this.props.createAd(adData);
  };

  render() {
    return (
      <div className="Edit">
        <Form onSubmit={this.onCreate}></Form>
        <button>
          <Link to="/home">Home</Link>
        </button>
      </div>
    );
  }
}

export default Create;
