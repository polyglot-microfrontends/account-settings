System.register([], function(_export, _context) {
  window.accountSettingsBaseDir = _context.meta.url.slice(0, _context.meta.url.lastIndexOf('/') + 1);

  return {
    execute() {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = accountSettingsBaseDir + 'account-settings.css'
      document.head.appendChild(link)

      angular.module('account-settings').config(['$sceDelegateProvider', function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          window.accountSettingsBaseDir + '**',
        ]);
      }])

      const angularjsLifecycles = singleSpaAngularjs.default({
        angular: window.angular,
        mainAngularModule: 'account-settings',
        uiRouter: true,
        preserveGlobal: true,
        template: '<account-settings />'
      });

      _export(angularjsLifecycles);
    }
  }
})