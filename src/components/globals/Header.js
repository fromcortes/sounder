import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
        <div id="Header" className="bg-white flex items-center justify-between">
          <div id="LeftHeader" className="flex">
            <div className="bg-pink dib flex items-center ph4 pv3">
              <Link to="/" className="fw8 i link ttu white">Sounder</Link>
            </div>

            <div id="HeaderOptions" className="flex">
              <ul className="list flex justify-between">
                <li className="f6 fw6 mr4 tracked ttu">
                  <Link to="/" className="black link">
                    Option
                  </Link>
                </li>
                <li className="f6 fw6 mr4 tracked ttu">
                  <Link to="/" className="black link">
                    Option
                  </Link>
                </li>
                <li className="f6 fw6 mr4 tracked ttu">
                  <Link to="/" className="black link">
                    Option
                  </Link>
                </li>
                <li className="f6 fw6 mr4 tracked ttu">
                  <Link to="/" className="black link">
                    Option
                  </Link>
                </li>
                <li className="f6 fw6 mr4 tracked ttu">
                  <Link to="/" className="black link">
                    Option
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            <span>Using Bose QC35 II</span>
            <div className="bg-black-10 br-pill h2 w2"></div>
          </div>
        </div>
    );
  }
}

export default Header;
