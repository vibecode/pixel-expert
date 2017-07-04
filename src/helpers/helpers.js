import * as ScreenTypes from '../constants/screenTypes';
import { Tasks } from '../constants/strings';

const getRandomItemFromArray = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);

  return arr[idx];
};

export const generateQuest = (screens, images) => {
  const screen = getRandomItemFromArray(screens);

  if (screen.type === ScreenTypes.QUEST_TRIPLE) {
    const correctImage = getRandomItemFromArray(images);
    const correctUrl = getRandomItemFromArray(correctImage.url);
    const correctIdx = Math.floor(Math.random() * 3);
    const task = correctImage.type === 'photo' ? Tasks.TRIPLE_PHOTO : Tasks.TRIPLE_PAINTING;

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
