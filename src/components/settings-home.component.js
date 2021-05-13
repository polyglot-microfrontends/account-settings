angular
.module('account-settings')
.component('settingsHome', {
  templateUrl: () => window.accountSettingsBaseDir + 'components/settings-home.template.html',
  controller: ['$rootScope', function ($rootScope) {
    // eslint-disable-next-line no-console
    console.log('root scope', $rootScope.singleSpaProps)
  }]
})