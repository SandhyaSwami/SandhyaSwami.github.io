(function() {
  'use strict';

  angular
    .module('livingItIndia')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
