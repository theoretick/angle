angle.controller("IndexCtrl", function($scope){

  $scope.user = { name: ''
                , age: 42
                , gender: 'Female'
                }

  $scope.disableTooltips = function(){
    $scope.showTooltips = false;
  }

})


angle.controller("WidgetFormCtrl", function($scope, $filter, Widgets, $routeParams, $location){

  $scope.updateWidget = function(widget){
    Widgets.updateWidget(widget)
      .success(function(d){
        Widgets.refresh();
        $scope.back(widget); })
      .failure(function(d){
        $location.path("/widgets");
    });
  }

  $scope.back = function(widget) {
      var url   = [ "/widgets" ];
      var newPath = '';

      url.push($filter('dasherize')(widget.group));
      url.push($filter('dasherize')(widget.name));
      newPath = url.join("/");

      $location.path(newPath);
  }

})