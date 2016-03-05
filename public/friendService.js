angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      })
    },

    getFriends: function() {
    	return $http({
        method: 'GET',
        url: '/api/profiles'
      })
    },

    getUsers: function() {
      return $http({
        method: 'GET',
        url: '/api/profiles/index'
      })
    },

    addFriend: function(friend) {
      return $http({
        method: 'POST',
        url: '/api/profiles/add',
        data: friend
      })
    },

    getUserProfile: function() {
      return $http({
        method: 'GET',
        url: '/api/profiles/profile'
      }).then(function(data) {
        return data.data;
      })
    },

    updateProfile: function(user, userProfile) {
      return $http({
        method: 'PUT',
        url: '/api/profiles/user',
        data: user
      })

      $http({
        method: 'PUT',
        url: '/api/profiles',
        data: userProfile
      })
    }
  }
});
