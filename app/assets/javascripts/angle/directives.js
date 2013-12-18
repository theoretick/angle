
angle.directive('prettynav', function($rootScope, $location, Widgets) {
  return {
      restrict: 'E', // define as an element, versus 'A' for attribute on element
      scope: true, // set own scope
      link: function (scope, elm, attrs) {
          scope.fields = checklistItems;

          // watch for changes to scope object adminMode
          scope.$watch('adminMode', function(newValue, oldValue) {
               if (newValue === true) {
                   scope.advancedControls = true;
               }
           }), true; // compare via ObjectEquality is set to 'true'

          // capture on attempt to navigate away
          scope.$on('$locationChangeStart', function(event, newUrl) {
               confirmation = confirmExiting();
               if (!confirmation){
                   event.preventDefault();
               }
           });
      }
  }
})


// acts as element attribute
angle.directive('starredListItems', function($rootScope){
  return {
    restrict: 'A',
    link: function (scope, elm, attrs) {
      //fooo foo
    },
    template:  "{{starred_items_label}}",
    transclude: true
  }
});