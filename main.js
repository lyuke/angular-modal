angular.module('mainApp',['ngModal'])
.controller('MainController',function($scope,$modal){
  $scope.message="Angular modal demo";

  $scope.openModal =function(){
    $modal.open({
      templateUrl:"modalDemo.html",
      controller:"ModalController"
    });
    
  }

})

.controller('ModalController',function($scope,$modalInstance){
    $scope.message ="message from modal ";
    $scope.ok =function(){
      $modalInstance.close($scope.message);
    }
    $scope.cancel = function(){
      $modalInstance.dismiss("canceled!");
    }

});
