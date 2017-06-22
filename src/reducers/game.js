import * as actionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
  currentQuestion: 0,
  timeTotal: 30,
  timeLeft: 30,
  livesTotal: 3,
  livesLeft: 3,
  fastAnswerTime: 10,
  slowAnswerTime: 20,
  correctAnswerPoints: 100,
  stats: [
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
  ],
  questions: [
    {
      'type': 'two-of-two',
      'question': 'Угадайте для каждого изображения фото или рисунок?',
      'answers': [
        {
          'image': {
            'url': 'http://placehold.it/468x458',
            'width': 468,
            'height': 458
          },
          'type': 'photo'
        },
        {
          'image': {
            'url': 'http://placehold.it/468x458',
            'width': 468,
            'height': 458
          },
          'type': 'painting'
        }
      ]
    },
    {
      'type': 'tinder-like',
      'question': 'Угадай, фото или рисунок?',
      'answers': [
        {
          'image': {
            'url': 'http://placehold.it/705x455',
            'width': 705,
            'height': 455
          },
          'type': 'photo'
        }
      ]
    },
    {
      'type': 'one-of-three',
      'question': 'Найдите рисунок среди изображений',
      'answers': [
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'painting'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        }
      ]
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TIME:
      return {
        ...state,
        timeLeft: action.payload
      };
    default:
      return state;
  }
}
