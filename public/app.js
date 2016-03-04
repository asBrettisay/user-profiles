angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {
			userInfo: function( friendService ) {
				return friendService.getFriends().then(function(res) {
					return res.data;
				});
			}
		}
	})
	.state('index', {
		url: '/index',
		templateUrl: './views/profile.html',
		controller: function($scope, users) {
			$scope.friends = users;
		},
		resolve: {
			users: function(friendService) {
				return friendService.getUsers().then(function(data) {
					return data.data;
				})
			}
		}
	})

	$urlRouterProvider.otherwise('/');

});
