var contactControllers = angular.module('contactControllers', ['ngAnimate']);

contactControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/seed.json').then(function(response) {
    $scope.contacts = response.data;
    $scope.contactOrder = 'name';
  });
}]);

contactControllers.controller('FormController', ['$scope', '$http', function($scope, $http) {
	$scope.saveContact = function (contacts) {
		console.log(contacts);
	}
}]);

contactControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/seed.json').then(function(response) {
    $scope.contacts = response.data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.contacts.length-1;
    }

    if ($routeParams.itemId < $scope.contacts.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

