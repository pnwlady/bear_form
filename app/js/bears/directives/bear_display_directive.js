module.exports = function(app) {
  app.directive('bear', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/templates/bear.html',
      scope: {
        bearData: '='
      }
    };
  });
};
