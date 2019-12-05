import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Board from './Board';
import SignUp from './SignUp';
import PlayerInfo from './PlayerInfo';

const Root = (props) => {
  return(
  <div className='Root'>
    <Header></Header>
    <Router>
      <Route path="/hello_world" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/board" component={Board}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/player/:id" component={PlayerInfo}/>
    </Router>
    <Footer></Footer>
  </div>
);
};

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root;