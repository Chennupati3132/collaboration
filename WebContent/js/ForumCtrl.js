var fapp = angular.module('forummyApp',[]);
fapp.controller('forumcntrl', [ '$scope', '$http', function($scope, $http) {
var BASE_URL = 'http://localhost:8087/collabB';

$scope.getAllForum= function() {
console.log("get all forums")
$http({
method : 'GET',
url : BASE_URL+'/forum'
}).success(function(data, status, headers, config) {
$scope.forums=data;
//alert(data); 
}).error(function(data, status, headers, config) {
alert("Error");
});
};
$scope.submit = function() {
console.log("create forum")

$scope.forum = { 
id:$scope.id,
Description : $scope.Description,
userid:$scope.userid,
doc:$scope.doc,
topic:$scope.topic,
name : $scope.name,
} 
$http({
method : 'POST',
url : BASE_URL+'/createForum',
data : $scope.forum
}).success(function(data, status, headers, config) {
$scope.id='';
$scope.Description='';
$scope.userid='';
$scope.doc='';
$scope.name='';
$scope.topic='';
$scope.getAllForum();
}).error(function(data,status,headers,config){
alert("error");
});
};
$scope.deleteforum=function(id){
$http({
method:'DELETE',
url:BASE_URL+'/deleteForum/'+id
}).success(function(data,status,headers,config){
$scope.getAllForum();
})
};
$scope.editforum=function(id,name,topic,Description){
$scope.id=id;
$scope.name=name;
$scope.topic=topic;
$scope.Description=Description;
}
}]);