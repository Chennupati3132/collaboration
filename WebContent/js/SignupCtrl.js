/*var app = angular.module("myApp", []);

app.controller('SignupCtrl', function($scope) {
	console.log("hello from Signupcontroller");
      $scope.Name = "KRISHNA";
      $scope.Username= "Sai";
  
});*/


var app = angular.module('signmyApp',[]);
app.controller('Registercontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8081/collabB';

console.log("registering");
	$scope.submit = function() {
		
		console.log("done:");
	

		$scope.users = {	
			
			username : $scope.username,
			password:$scope.password,
			confirm:$scope.confirmpassword,
			email: $scope.email,
			phone:$scope.phone,
			dob:$scope.dob,
			role:$scope.role,
			address:$scope.address,
			gender:$scope.gender,
			status:$scope.status
		
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.email='';
			$scope.password='';
			$scope.confirmpassword='';
			$scope.phone='';
			$scope.dob='';
			$scope.role='';
			$scope.address='';
			$scope.gender='';
			$scope.status='';
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};
}]);