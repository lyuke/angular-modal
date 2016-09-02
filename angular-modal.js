angular.module('ngModal',[])
  .factory("$modal",function($rootScope){
    var currentModalUrl="";


    function open(args){
       currentModalUrl=args.templateUrl;
        $rootScope.$on('modalClosed',function(event,data){
          console.log(data);
        })
    }

    $rootScope.$on('modalCanceled',function(event,data){
      console.log(data);
    })

    return {
      open:open
    }
  })

  .factory('$modalInstance',function($rootScope){
    return {
      close :function(value){
        $rootScope.$broadcast("modalClosed",value);

      },
      dismiss:function(value){
        $rootScope.$broadcast("modalCanceled",value);
      }
    }
  });
