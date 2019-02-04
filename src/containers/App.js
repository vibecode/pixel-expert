import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { changeScreen } from '../actions/route';
import App from '../components/App';
import *  as GameActions from '../actions/game';
import * as QuestsActions from '../actions/quests';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...GameActions, ...QuestsActions, changeScreen }, dispatch);
};

export default connect(state => ({ state }), mapDispatchToProps)(App);
