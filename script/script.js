'use-strict';

// #region ***  DOM references                           ***********
// #endregion

// #region ***  Callback-Visualisation - show___         ***********
// #endregion

// #region ***  Callback-No Visualisation - callback___  ***********
// #endregion

// #region ***  Data Access - get___                     ***********
// #endregion

// #region ***  Event Listeners - listenTo___            ***********
const listenToUI = function () {
  document.querySelector('.js-toggle').addEventListener('click', function () {
    document.querySelector('.js-toggle').classList.toggle('added');
  });
};
// #endregion

// #region ***  Init / DOMContentLoaded                  ***********
const init = function () {
  listenToUI();
};

document.addEventListener('DOMContentLoaded', function () {
  console.info('DOM loaded');
  init();
});
// #endregion
