const INITIAL_STATE =  [
  {
    "type": "two-of-two",
    "task": "Угадайте для каждого изображения фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "https://k37.kn3.net/695A61B3C.jpg",
          "width": 560,
          "height": 400
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "https://k42.kn3.net/F588C1419.jpg",
          "width": 560,
          "height": 400
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "one-of-three",
    "task": "Найдите рисунок среди изображений",
    "answers": [
      {
        "image": {
          "url": "http://i.imgur.com/dWTKNtv.jpg",
          "width": 304,
          "height": 400
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://i.imgur.com/ncXRs5Y.jpg",
          "width": 304,
          "height": 400
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "https://k31.kn3.net/4BF6BBF0E.jpg",
          "width": 304,
          "height": 400
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "one-of-three",
    "task": "Найдите рисунок среди изображений",
    "answers": [
      {
        "image": {
          "url": "http://i.imgur.com/UIHVp0P.jpg",
          "width": 304,
          "height": 400
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://i.imgur.com/eSlWjE7.jpg",
          "width": 304,
          "height": 400
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "https://k43.kn3.net/1C4F7F5D5.jpg",
          "width": 304,
          "height": 400
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "tinder-like",
    "task": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "https://k41.kn3.net/FF5009BF0.jpg",
          "width": 705,
          "height": 400
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "tinder-like",
    "task": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://i.imgur.com/gUeK0qE.jpg",
          "width": 705,
          "height": 400
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "tinder-like",
    "task": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "https://i.imgur.com/NXlVX48.png",
          "width": 705,
          "height": 400
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "one-of-three",
    "task": "Найдите рисунок среди изображений",
    "answers": [
      {
        "image": {
          "url": "https://i.redd.it/0uvt7jy0hy2y.jpg",
          "width": 304,
          "height": 400
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "https://i.imgur.com/DiHM5Zb.jpg",
          "width": 304,
          "height": 400
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "https://k41.kn3.net/CF684A85A.jpg",
          "width": 304,
          "height": 400
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "one-of-three",
    "task": "Найдите фото среди изображений",
    "answers": [
      {
        "image": {
          "url": "https://k37.kn3.net/0F4598844.jpg",
          "width": 304,
          "height": 400
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "https://k35.kn3.net/9ACD0AC56.jpg",
          "width": 304,
          "height": 400
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "https://i.redd.it/bj70zjl196kx.jpg",
          "width": 304,
          "height": 400
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "tinder-like",
    "task": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "https://k37.kn3.net/47F2604E3.jpg",
          "width": 705,
          "height": 400
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "one-of-three",
    "task": "Найдите фото среди изображений",
    "answers": [
      {
        "image": {
          "url": "https://k36.kn3.net/1619797DF.jpg",
          "width": 304,
          "height": 400
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "https://k39.kn3.net/B27A12A74.jpg",
          "width": 304,
          "height": 400
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "https://i.redd.it/n1vqglrr0o2y.jpg",
          "width": 304,
          "height": 400
        },
        "type": "photo"
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
