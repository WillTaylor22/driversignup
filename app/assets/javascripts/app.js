(function(){
  var app = angular.module('form', ["checklist-model"]);

  app.controller('FormController', ['$scope', function($scope){
    $scope.driver = {
      'categories': [],
      'days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
      'shifts': ['Morning', 'Afternoon', 'Evening', 'Night']
    }

    this.drivers = drivers;

    this.addUser = function(driver){
      var newdriver = angular.copy(driver)
      this.drivers.push(newdriver);
      $scope.driver.company = ""
      $scope.driver.first_name = ""
      $scope.driver.last_name = ""
      $scope.driver.email = ""
      $scope.driver.mobile_number = ""
      $scope.driver.postcode = ""
      $scope.driver.owns_vehicle = ""
      $scope.driver.notes = ""
      // $scope.driver.categories = ['Motorbike', 'Van', 'Lorry', 'Taxi','Car','Bus','Cyclist'],
      // $scope.driver.days =  ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
      // $scope.driver.shifts =  ['Morning', 'Afternoon', 'Evening', 'Night']
    }

    $scope.categories = [
      'Motorbike', 
      'Van', 
      'Lorry', 
      'Taxi',
      'Car',
      'Bus',
      'Cyclist'
    ];

    $scope.days = [
      'Monday', 
      'Tuesday', 
      'Wednesday', 
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    $scope.shifts = [
      'Morning', 
      'Afternoon', 
      'Evening', 
      'Night'
    ];

  }]);

  var drivers = [];

})();

