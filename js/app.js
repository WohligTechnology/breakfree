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
            url: "/login",
            templateUrl: "views/template-login.html",
            controller: 'LoginCtrl'
        })
        .state('home', {
            url: "/home",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/template1.html",
            controller: 'DashboardCtrl'
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
        .state('editadmin', {
            url: "/edit-admin",
            templateUrl: "views/template.html",
            controller: 'EditAdminCtrl'
        })
        .state('employee', {
            url: "/employee",
            templateUrl: "views/template1.html",
            controller: 'EmployeeCtrl'
        })
        .state('createemployee', {
            url: "/create-employee",
            templateUrl: "views/template1.html",
            controller: 'CreateEmployeeCtrl'
        })
        .state('editemployee', {
            url: "/edit-employee",
            templateUrl: "views/template1.html",
            controller: 'EditEmployeeCtrl'
        })
        .state('empcalendar', {
            url: "/employee-calendar",
            templateUrl: "views/template1.html",
            controller: 'EmpCalendarCtrl'
        })
        .state('broker', {
            url: "/broker",
            templateUrl: "views/template1.html",
            controller: 'BrokerCtrl'
        })
        .state('createbroker', {
            url: "/create-broker",
            templateUrl: "views/template1.html",
            controller: 'CreateBrokerCtrl'
        })
        .state('editbroker', {
            url: "/edit-broker",
            templateUrl: "views/template1.html",
            controller: 'EditBrokerCtrl'
        })
        .state('builder', {
            url: "/builder",
            templateUrl: "views/template1.html",
            controller: 'BuilderCtrl'
        })
        .state('createbuilder', {
            url: "/create-builder",
            templateUrl: "views/template1.html",
            controller: 'CreateBuilderCtrl'
        })
        .state('editbuilder', {
            url: "/edit-builder",
            templateUrl: "views/template1.html",
            controller: 'EditBuilderCtrl'
        })
        .state('lead', {
            url: "/lead",
            templateUrl: "views/template1.html",
            controller: 'LeadCtrl'
        })
        .state('createlead', {
            url: "/create-lead",
            templateUrl: "views/template1.html",
            controller: 'CreateLeadCtrl'
        })
        .state('editlead', {
            url: "/edit-lead",
            templateUrl: "views/template1.html",
            controller: 'EditLeadCtrl'
        })
        .state('leadlog', {
            url: "/lead-log",
            templateUrl: "views/template1.html",
            controller: 'LeadLogCtrl'
        })

        .state('createlog', {
            url: "/create-log",
            templateUrl: "views/template1.html",
            controller: 'CreateLogCtrl'
        })
        .state('project', {
            url: "/project",
            templateUrl: "views/template1.html",
            controller: 'ProjectCtrl'
        })
        .state('createproject', {
            url: "/createproject",
            templateUrl: "views/template1.html",
            controller: 'CreateProjectCtrl'
        })
        .state('propertydetail', {
            url: "/property-detail",
            templateUrl: "views/template1.html",
            controller: 'PropertyDetailCtrl'
        })
        .state('propertylist', {
            url: "/propertylist",
            templateUrl: "views/template1.html",
            controller: 'PropertyListCtrl'
        })
        .state('createproperty', {
            url: "/create-property",
            templateUrl: "views/template1.html",
            controller: 'CreatePropertyCtrl'
        })
        .state('editproperty', {
            url: "/edit-property",
            templateUrl: "views/template1.html",
            controller: 'EditPropertyCtrl'
        })
        .state('moredetail', {
            url: "/more-detail",
            templateUrl: "views/template1.html",
            controller: 'MoreDetailCtrl'
        })
        .state('editmoredetail', {
            url: "/edit-more-detail",
            templateUrl: "views/template1.html",
            controller: 'EditMoreDetailCtrl'
        })
        .state('paymentdetail', {
            url: "/payment-detail",
            templateUrl: "views/template1.html",
            controller: 'PaymentDetailCtrl'
        })
        .state('editpaymentdetail', {
            url: "/edit-payment-detail",
            templateUrl: "views/template1.html",
            controller: 'EditPaymentDetailCtrl'
        })
        .state('ameneties', {
            url: "/ameneties",
            templateUrl: "views/template1.html",
            controller: 'AmenetiesCtrl'
        })
        .state('editameneties', {
            url: "/edit-ameneties",
            templateUrl: "views/template1.html",
            controller: 'EditAmenetiesCtrl'
        })
        .state('images', {
            url: "/images",
            templateUrl: "views/template1.html",
            controller: 'ImagesCtrl'
        })
        .state('editimages', {
            url: "/edit-images",
            templateUrl: "views/template1.html",
            controller: 'EditImagesCtrl'
        })
        .state('moreproperty', {
            url: "/more-property",
            templateUrl: "views/template1.html",
            controller: 'MorePropertyCtrl'
        });

    $urlRouterProvider.otherwise("/dashboard");
    $locationProvider.html5Mode(isproduction);
});

firstapp.directive('uploadImage', function($http) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function($scope, element, attrs) {
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function() {
                $scope.model = [];
            };
            $scope.upload = function(image) {
                console.log(image);
                console.log("File");
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
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


firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
