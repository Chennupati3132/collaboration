app.service('JobService',['$http',function($http){
	
	var BASE_URL = 'http://localhost:8087/collaboration/'
		var self=this
		self.job = {id:"",title:""}
	    self.jobs = []
		self.getAllJobs = getAllJobs
		function getAllJobs(){
		
		console.log("calling all jobs of jobservice")
		return $http.get(BASE_URL+'/job')
			.then(
					function(response)
					{
						console.log("getting list")
						return response.data;
					}
			);
	}
}]);