angular.module('ngClickRemove', [])
angular.module('ngClickRemove').directive('clickRemove', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      return element.click(function() {
        var target;
        target = element;
        if (attrs.clickRemoveTarget) {
          target = $(attrs.clickRemoveTarget);
        }
        target.removeClass(attrs.clickRemove);
        scope.$emit('removed');
        scope.$apply();
        if (attrs.preventDefault) {
          return false;
        }
      });
    }
  };
});
