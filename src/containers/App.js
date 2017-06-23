import { connect } from 'react-redux';
import { changeScreen } from '../actions/route';
import App from '../components/App';
import *  as GameActions from '../actions/game';
import { QuestType } from '../constants/questTypes';
import * as ScreenTypes from '../constants/screenTypes';

function getScreenType(quest) {
  switch (quest.type) {
    case QuestType.QUEST_SOLO:
      return ScreenTypes.QUEST_SOLO;
    case QuestType.QUEST_DOUBLE:
      return ScreenTypes.QUEST_DOUBLE;
    case QuestType.QUEST_TRIPLE:
      return ScreenTypes.QUEST_TRIPLE;
    default:
      throw new Error(`Unknown quest type ${quest.type}`);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeScreen(screenType) {
      dispatch(changeScreen(screenType));
    },
    updateTime(timeLeft) {
      dispatch(GameActions.updateTime(timeLeft));
    },
    onAnswer(isCorrect, currentQuest, quests) {
      if (isCorrect) {
        console.log(isCorrect);
      } else {
        dispatch(GameActions.setWrongAnswer())
      }
      dispatch(GameActions.nextQuest());
      dispatch(changeScreen(getScreenType(quests[currentQuest + 1])));
    }
  }
};

export default connect((state) => ({ state }), mapDispatchToProps)(App);
