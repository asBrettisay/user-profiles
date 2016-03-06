angular.module('userProfiles')
.factory('friendService', function( $http, $q ) {
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
      user.name = userProfile.name;
      var userP = $http({
        method: 'PUT',
        url: '/api/profiles/user',
        data: user
      })

      var profileP = $http({
        method: 'PUT',
        url: '/api/profiles',
        data: userProfile
      })

      return $q.all([userP, profileP]);
    }
  }
});
