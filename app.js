var app = angular.module("customerApp", [])
app.controller('customerController', ['$scope', 'userFactory', '$http', function ($scope, userFactory, $http) {


	$scope.login = true;
	$scope.newUser = {};
	$scope.userRegistration = true;
	$scope.orderStatus = false;
	$scope.comapyList = [
		{
			"startDate": new Date("05-04-2019"),
			"company": "abc",
			"endDate": new Date("05-09-2019"),
			"email": "abc@xyz.com",
		},
		{
			"startDate": new Date("05-04-2019"),
			"company": "abc",
			"endDate": new Date("05-08-2019"),
			"email": "abc@xyz.com",

		}
	];
	$scope.user = {};
	$scope.loginUser = function () {
		//	$scope.orderList = response;

		$scope.userRegistration = false;

		$scope.orderStatus = true;
		
	}

	$scope.registerUser = function () {
		//	$scope.orderList = response;
		$scope.comapyList.push($scope.newUser);
		$scope.userRegistration = false;

		$scope.orderStatus = true;
	}
	
}
])
app.factory('userFactory', ['$http', function ($http) {
	return {

		getAllCompanies: function (token) {
			var url = 'http://localhost:9090/api/getAllCompanies';

			return $http({
				url: url,
				method: "GET",
				headers: { 'Authorization': "bearer " + token },

			});
		},

		loginData: function (data) {


			var req = {
				method: 'POST',
				url: 'http://localhost:9090/login',
				headers: {
					'Content-Type': 'application/json'
				},
				data: { 'user': data.name, 'passowrd': data.password }
			}

			return $http(req).then(function (response) { return response });
		},
		registerCompany: function (data) {
			var url = 'localhost:8090/registerCompany';


			var req = {
				method: 'POST',
				url: 'http://localhost:9090/registerCompany',
				headers: {
					'Content-Type': 'application/json'
				},
				data: data
			}

			return $http(req).then(function (response) { return response });
		},
		updateCompanyStatus: function (data, token) {



			let req = {
				method: 'PUT',
				url: 'http://localhost:9090/api/updateCompanyStatus',
				headers: {
					'Authorization': "bearer " + token,
					'Content-Type': 'application/json'
				},
				data: data
			}

			return $http(req).then(function (response) { return response });
		}


	};
}]);