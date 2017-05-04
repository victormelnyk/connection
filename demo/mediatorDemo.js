(() => {
  const mediator = window.connect.mediator;

  mediator.provide('CHANNEL_1', value => value * 2);

  const result = mediator.request('CHANNEL_1', [2]);
  console.log('CHANNEL_1 result', result);

  mediator.remove('CHANNEL_1');
})();

(() => {
  const mediator = window.connect.mediator;

  mediator.provide('CHANNEL_2', value => new Promise(resolve => {
    setTimeout(() => {
      resolve(value * 2);
    }, 1000);
  }));

  mediator.request('CHANNEL_2', [2]).then(result => {
    console.log('CHANNEL_2 result', result);
  });

  mediator.remove('CHANNEL_2');
})();
