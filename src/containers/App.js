import { connect } from 'react-redux';
import { changeScreen } from '../actions/route';
import App from '../components/App';

const mapStateToProps = state => {
  return {
    route: state.route
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeScreen(screenType) {
      dispatch(changeScreen(screenType));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
