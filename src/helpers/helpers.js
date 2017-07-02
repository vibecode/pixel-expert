// import { QuestType } from '../constants/questTypes';
// import * as ScreenTypes from '../constants/screenTypes';

// export const  getScreenType = (quest) => {
//   switch (quest.type) {
//     case QuestType.QUEST_SOLO:
//       return ScreenTypes.QUEST_SOLO;
//     case QuestType.QUEST_DOUBLE:
//       return ScreenTypes.QUEST_DOUBLE;
//     case QuestType.QUEST_TRIPLE:
//       return ScreenTypes.QUEST_TRIPLE;
//     default:
//       throw new Error(`Unknown quest type ${quest.type}`);
//   }
// };

const images = [
  {
    type: 'photo',
    url: ['lol.jpeg', 'kek.jpeg']
  },
  {
    type: 'painting',
    url: ['lenin.jpeg', 'stalin.jpeg']
  }
];

const screens = [
  {
    "type": "two-of-two",
    "task": "Угадайте для каждого изображения фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "",
          "width": 560,
          "height": 400
        },
        "type": ""
      },
      {
        "image": {
          "url": "",
          "width": 560,
          "height": 400
        },
        "type": ""
      }
    ]
  },
  {
    "type": "one-of-three",
    "task": "",
    "answers": [
      {
        "image": {
          "url": "",
          "width": 304,
          "height": 400
        },
        "type": ""
      },
      {
        "image": {
          "url": "",
          "width": 304,
          "height": 400
        },
        "type": ""
      },
      {
        "image": {
          "url": "",
          "width": 304,
          "height": 400
        },
        "type": ""
      }
    ]
  },
  {
    "type": "tinder-like",
    "task": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "",
          "width": 705,
          "height": 400
        },
        "type": ""
      }
    ]
  }
];

const getRandomItemFromArray = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);

  return arr[idx];
};

const generateSchema = (screens, images) => {
  const screen = getRandomItemFromArray(screens);

  if (screen.type === 'one-of-three') {
    const correctImage = getRandomItemFromArray(images);
    const correctUrl = getRandomItemFromArray(correctImage.url);
    const correctIdx = Math.floor(Math.random() * 3);
    const task = correctImage.type === 'photo' ? 'Найдите фото среди изображений' : 'Найдите рисунок среди изображений';

    const answersWithCorrect = [
      ...screen.answers.slice(0, correctIdx),
      {
        ...screen.answers[correctIdx],
        image: {
          ...screen.answers[correctIdx].image,
          url: correctUrl
        },
        type: correctImage.type
      },
      ...screen.answers.slice(correctIdx + 1)
    ];

    const answers = answersWithCorrect.reduce((acc, answer) => {
      const image = images.filter(image => correctImage.type !== image.type);
      let url = getRandomItemFromArray(image[0].url);

      acc.forEach(answer => {
        while (answer.image.url === url) {
          url = getRandomItemFromArray(image[0].url);
        }
      });

      if (answer.type !== correctImage.type) {
        return [
          ...acc,
          {
            ...answer,
            image: {
              ...answer.image,
              url
            },
            type: image[0].type
          }
        ]
      }

      return [...acc, { ...answer }];
    }, []);

    return { ...screen, answers, task };
  }

  const answers = screen.answers.reduce((acc, answer, idx) => {
    const image = getRandomItemFromArray(images);
    let url = getRandomItemFromArray(image.url);

    if (screen.type !== 'tinder-like') {
      //check if current url is not the same as previous
      while (idx && url === acc[idx - 1].image.url) {
        url = getRandomItemFromArray(image.url)
      }
    }

    return [
      ...acc,
      {
        ...answer,
        image: {
          ...answer.image,
          url,
        },
        type: image.type
      }
    ]
  }, []);

  return { ...screen, answers };
};

generateSchema(screens, images);
