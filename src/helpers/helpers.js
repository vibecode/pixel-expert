import { QuestType } from '../constants/questTypes';
import * as ScreenTypes from '../constants/screenTypes';

export const  getScreenType = (quest) => {
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
};