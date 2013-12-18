angle.service('Widgets', function($http){

  var allWidgets = [];

  var service = {
    deleteWidget: function(id){
      return $http.delete('/widgets/' + id)
    },
    updateWidget: function(widget){
      if (widget.id === undefined) {
          return $http.post('/widgets', {
              widget: widget
          })
      } else {
          return $http.put('/widgets/' + widget.id, {
              widget: widget
          })
      }
    },
    fetch: function(){
        return $http.get('/widgets')
    },
    refresh: function (callback) {
        service.fetch().success(function (data) {
            allWidgets = data;
            if (callback !== undefined) {
                callback(data)
            }
            // broadcast event for any listeners and digest cycle
            $rootScope.$broadcast('widgetsLoaded')
        });
    },
    all: function () {
        return allWidgets;
    }
  }

  //bootstrap data
  if (allWidgets == []){
    service.refresh()
  }

  return service;
});



//////////////////////////////////////////////////////////////////

angle.service('Employees', function($http, $rootScope){
  var allEmployees = [];

  $http.get('/employees').success(function(data){
    allEmployees = data;

    // broadcast event for any listeners and digest cycle
    $rootScope.$broadcast('employeesLoaded');
  });
});

//////////////////////////////////////////////////////////////////
// services can also just be general helper methods
//////////////////////////////////////////////////////////////////

angle.service('ConfirmDialog', function () {
    var service = {
        ask: function (message) {
            if (message === undefined) {
                message = "Are you sure?"
            }
            var confirmation = confirm(message);
            return confirmation;
        }
    }
    return service;

});


