var app = angular.module('myApp', ['ngRoute','ngCookies','signmyApp','blogmyApp','forummyApp',]);

app.config(function($routeProvider) {
  $routeProvider
  
  .when('/Home', {
	    templateUrl : 'html/Home.html',
	    controller  : 'LoginController',
	    controllerAs: 'vm'
	 })

   .when('/register', {
    templateUrl : 'html/Signup.html',
    controller  : 'Registercontroller'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'LoginController',
    	controllerAs:'vm'

 })
 
  .when('/blog', {
    templateUrl : 'html/Blog.html',
    controller  : 'blogcntrl'
 })
 
  .when('/Forum', {
    templateUrl : 'html/Forum.html',
    controller  : 'forumcntrl'
 })
 	/*.when("/users",{
    	templateUrl: "html/Users.html",
    	controller:'userctrl'
    })
*/

  .otherwise({redirectTo: '/'});
});