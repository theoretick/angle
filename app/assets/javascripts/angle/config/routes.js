
angle.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/widgets', {controller: 'indexCtrl'}).
    when('widgets/new', {templateUrl: 'templates/widget-form.html'}).
    when('widgets/edit/:widgetGroupSlug/:widgetSlug', {templateUrl: 'templates/widget-form.html'}).
    when('widgets/:widgetGroupSlug/:widgetSlug', {templateUrl: 'templates/widget.html'}).
    otherwise({redirectTo: '/widgets'})
}]);