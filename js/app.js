// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
  .state('login', {
      url: "/",
      templateUrl: "views/template-login.html",
      controller: 'LoginCtrl'
  })
    .state('home', {
    url: "/home",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })
  .state('admin', {
  url: "/admin",
  templateUrl: "views/template.html",
  controller: 'AdminCtrl'
})
.state('createadmin', {
url: "/create-admin",
templateUrl: "views/template.html",
controller: 'CreateAdminCtrl'
})
  .state('empcalendar', {
  url: "/empcalendar",
  templateUrl: "views/template.html",
  controller: 'EmpcalendarCtrl'
})
.state('employeelist', {
url: "/employee",
templateUrl: "views/template.html",
controller: 'EmplistCtrl'
})
.state('leadmanagement', {
url: "/leadmanagement",
templateUrl: "views/template.html",
controller: 'leadmanagementCtrl'
})
.state('dashboard', {
url: "/dashboard",
templateUrl: "views/template.html",
controller: 'dashboardCtrl'
})
.state('brokerlist', {
url: "/broker",
templateUrl: "views/template.html",
controller: 'BrokerlistCtrl'
})
.state('createbroker', {
url: "/create-broker",
templateUrl: "views/template.html",
controller: 'CreateBrokerCtrl'
})
.state('createbuilder', {
url: "/create-builder",
templateUrl: "views/template.html",
controller: 'CreateBuilderCtrl'
})
.state('createlead', {
url: "/create-lead",
templateUrl: "views/template.html",
controller: 'CreateLeadCtrl'
})
.state('propertydetail', {
url: "/propertydetail",
templateUrl: "views/template.html",
controller: 'PropertyDetailCtrl'
})
.state('createemployee', {
url: "/create-employee",
templateUrl: "views/template.html",
controller: 'CreateEmployeeCtrl'
})
.state('builderlist', {
url: "/builder",
templateUrl: "views/template.html",
controller: 'BuilderlistCtrl'
});

  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});


firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
