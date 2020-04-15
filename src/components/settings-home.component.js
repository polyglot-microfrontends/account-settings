angular
.module('account-settings')
.component('settingsHome', {
  templateUrl: () => window.accountSettingsBaseDir + 'components/settings-home.template.html',
  controller: ['$rootScope', function ($rootScope) {
    console.log('root scope', $rootScope.singleSpaProps)
  }]
})