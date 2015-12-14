angular.module("app", ['ngRoute'])
	.controller('TaskController', function ($scope, $q) {
		$scope.name = "Gabriel";

		function getTaskPriorities() {
			return $q(function (resolve, reject) {
				setTimeout(function () {
					var priorities = [ {id: 1, name: "Low"}, {id: 2, name: "Normal"}, {id: 3, name: "High"}];
					resolve(priorities);
				}, 1000);
			});
		}

		function getTask() {
			return $q(function (resolve, reject) {
				setTimeout(function () {
					var task = {name: "Task 1", priority: 2};
					resolve(task);
				}, 2000)

			});
		}

		var promise = getTaskPriorities();
		promise.then(function (data) {
			$scope.taskPriorities = data;
		}, function (reason) {
			console.log("Failed: ", reason);
		});

		getTask().then(function (data) { $scope.task = data; });

		$scope.add = function () {
			$scope.taskPriorities.push({name: $scope.name});
		}
	});
