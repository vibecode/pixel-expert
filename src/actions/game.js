import * as actionTypes from '../constants/actionTypes';
import { GREETING } from '../constants/screenTypes';
import { getScreenType, generateQuest } from '../helpers/helpers';
import screensSchema from '../constants/screensSchema';
import * as firebase from 'firebase';

export const fetchData = () => (dispatch) => {
  //get images urls from firebase
  const ref = firebase.database().ref();
  ref.once("value")
     .then(snapshot => {
       const images = snapshot.val();

       //Generate quests schema
       const quests = new Array(10)
           .fill(null)
           .map(quest => generateQuest(screensSchema, images));

       //collect img urls from generated schema for preloading
       const urls = quests.reduce((acc, quest) => {
         return [
           ...acc,
           ...quest.answers.map(answer => answer.image.url)
         ]
       }, []);

       //preload all images
       const requests = urls.map(url => {
         return new Promise((resolve, reject) => {
           const image = new Image();
           image.src = url;
           image.onload = resolve;
           image.onerror = reject;
         })
       });

       Promise.all(requests)
              .then(() => {
                dispatch({
                  type: actionTypes.FETCH_SUCCESS,
                  payload: quests
                });
                setTimeout(() => {
                  dispatch({
                    type: actionTypes.CHANGE_SCREEN,
                    payload: GREETING
                  });
                }, 2000)
              }).catch(() => alert(`Не вышло загрузить все необходимые изображения :(.
              \nПопробуйте перезагрузить страницу.`))

     }).catch(err => alert(err));
};

export const nextQuest = screenType => {
  return {
    type: actionTypes.NEXT_QUEST,
    payload: screenType
  }
};

export const updateTime = timeLeft => {
  return {
    type: actionTypes.UPDATE_TIME,
    payload: timeLeft
  }
};

export const showFinalStats = state => {
  return {
    type: actionTypes.SHOW_FINAL_STATS,
    payload: state
  }
};

export const onAnswer = isCorrect => (dispatch, getState) => {
  dispatch({
    type: isCorrect ? actionTypes.CORRECT_ANSWER : actionTypes.WRONG_ANSWER
  });

  const state = getState();
  const { game, quests } = state;
  const { livesLeft, currentQuestIdx } = state.game;
  const nextQuestIdx = currentQuestIdx + 1;

  if (livesLeft && quests[nextQuestIdx]) {
    const quest = quests[nextQuestIdx];

    dispatch(nextQuest(getScreenType(quest)));
  } else {
    dispatch(showFinalStats(game));
  }
};

export const startAgain = () => {
  return {
    type: actionTypes.START_AGAIN
  }
};
