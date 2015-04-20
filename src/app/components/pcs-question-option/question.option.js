'use strict';
// ngInject
function pcsQuestionOption() {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/components/pcs-question-option/question.option.html',
    controllerAs: 'q',
    bindToController: true,
    scope: {
      title: '@',
      model: '=',
      modelCustomer: '=?',
      alreadyCustomer: '@',
      logo: '@'
    },
    controller: function () {}
  };
}
export default pcsQuestionOption;
