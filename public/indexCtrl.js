angular.module('userProfiles')
.controller('indexCtrl', function($scope, users, friendService, $state, $stateParams) {
  $scope.friends = users;
  $scope.addFriend = function(friend) {
    friendService.addFriend(friend).then(function(data) {
      $state.go('profile.friends', $stateParams, {reload: true})
    })
  }
})
