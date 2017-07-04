import { Tasks } from '../constants/strings';
import * as ScreenTypes from '../constants/screenTypes';

export default [
  {
    "type": ScreenTypes.QUEST_DOUBLE,
    "task": Tasks.DOUBLE,
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
    "type": ScreenTypes.QUEST_TRIPLE,
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
    "type": ScreenTypes.QUEST_SOLO,
    "task": Tasks.SOLO,
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