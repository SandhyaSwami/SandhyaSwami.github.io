(function() {
  'use strict';

  angular
    .module('livingItIndia')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
