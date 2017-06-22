import { connect } from 'react-redux';
import * as GameActions from '../actions/game';
import { changeScreen } from '../actions/route';
import QuestSolo from '../components/QuestSolo';

const mapStateToProps = state => state.game;

const mapDispatchToProps = dispatch => ({
  updateTime(timeLeft) {
    dispatch(GameActions.updateTime(timeLeft));
  },
  changeScreen(screenType) {
    dispatch(changeScreen(screenType));
  },
  onAnswer(answer) {

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestSolo);