'use strict';

/**
 * @ngdoc directive
 * @name gestDividasApp.directive:compile.directive
 * @description
 * # compile.directive
 */
// angular.module('gestDividasApp')
//   .directive('compile.directive', function () {
//     return {
//       template: '<div></div>',
//       restrict: 'E',
//       link: function postLink(scope, element, attrs) {
//         element.text('this is the compile.directive directive');
//       }
//     };
//   });


  angular.module('gestDividasApp').directive('compileTemplate', function($compile, $parse){
    return {
        link: function(scope, element, attr){
            var parsed = $parse(attr.ngBindHtml);
            function getStringValue() {
                return (parsed(scope) || '').toString();
            }

            // Recompile if the template changes
            scope.$watch(getStringValue, function() {
                $compile(element, null, -9999)(scope);  // The -9999 makes it skip directives so that we do not recompile ourselves
            });
        }
    }
});
