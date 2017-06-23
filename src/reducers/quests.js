const INITIAL_STATE =  [
  {
    'type': 'two-of-two',
    'task': 'Угадайте для каждого изображения фото или рисунок?',
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
    'task': 'Угадай, фото или рисунок?',
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
    'task': 'Найдите рисунок среди изображений',
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
];

export default ( state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}
