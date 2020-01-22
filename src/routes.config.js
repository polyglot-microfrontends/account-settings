angular
.module('account-settings')
.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $stateProvider.state({
    name: 'settings-home',
    url: '/settings',
    template: '<settings-home></settings-home>'
  })
}])