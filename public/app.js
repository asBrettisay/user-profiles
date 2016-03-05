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
		templateUrl: './views/profile.html',
		controller: 'profileCtrl',
		resolve: {
			userInfo: function( friendService ) {
				return friendService.getFriends().then(function(res) {
					return res.data;
				});
			}
		}
	})
	.state('profile.friends', {
		templateUrl: './views/friends.html',
	})
	.state('profile.index', {
		templateUrl: './views/friendIndex.html',
		controller: 'indexCtrl',
		resolve: {
			users: function(friendService) {
				return friendService.getUsers().then(function(data) {
					return data.data;
				})
			}
		}
	})
	.state('profile.settings', {
		url: '/settings',
		templateUrl: './views/settings.html',
		controller: 'settingsCtrl',
		resolve: {
			userProfile: function(friendService) {
				return friendService.getUserProfile()
			}
		}
	})

	$urlRouterProvider.otherwise('/');

});
