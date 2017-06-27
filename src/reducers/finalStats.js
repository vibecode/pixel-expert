const INITIAL_STATE = [
  {
    resultNumber: 1,
    win: false,
    correctPoints: 0,
    totalFinalPoints: 0,
    results: [
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
    extra: [
      {
        title: 'Бонус за скорость',
        icon: 'fast',
        total: 0,
        value: 0,
      },
      {
        title: 'Штраф за медлительность',
        icon: 'slow',
        total: 0,
        value: 0,
      },
      {
        title: 'Бонус за жизни',
        icon: 'heart',
        total: 0,
        value: 0
      }
    ]
  }
];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}