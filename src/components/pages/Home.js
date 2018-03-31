import React, { Component } from 'react';

class Home extends Component {
  render() {

    const pageName = "Home";
    const pageDescription = "Dennis Cortes is a Designer, Illustrator, Developer, Writer, and Beat-Maker.";

    return (
      <div id={pageName} className="black f6-l">
        <h1>Your Overview</h1>
      </div>
    );
  }
}

export default Home;
