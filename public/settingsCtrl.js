angular.module('userProfiles')
.controller('settingsCtrl', function($scope, friendService, userInfo, userProfile, $state, $stateParams) {
  $scope.user = userInfo.currentUser;
  $scope.userProfile = userProfile;

  $scope.update = function(user, userProfile) {
    friendService.updateProfile(user, userProfile).then(function(res) {
      $state.go('profile.friends', $stateParams, {reload: true});
    })
  }
})
