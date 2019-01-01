(function () {
    'use strict';

    angular.module('app').controller('MainController', constructor);

    function constructor($scope, $locale, $mdDialog, mongoService, workflowService) {

        var vm = this;
        vm.tenantId = "600DE79B-DCCD-4965-BC93-0A6A8E6AE388";
        var activitySchema = {
            "_id": "",
            "CreateDate": "2017-03-28T13:23:00.000Z",
            "CreatedBy": "229f0abe-3cef-4f82-b4bc-684dc41f5db1",
            "Language": null,
            "LastUpdateDate": "2017-03-28T13:23:00.000Z",
            "LastUpdatedBy": "229f0abe-3cef-4f82-b4bc-684dc41f5db1",
            "Tags": null,
            "TenantId": "600DE79B-DCCD-4965-BC93-0A6A8E6AE388",
            "RolesAllowedToRead": null,
            "IdsAllowedToRead": null,
            "RolesAllowedToWrite": null,
            "IdsAllowedToWrite": null,
            "RolesAllowedToUpdate": null,
            "IdsAllowedToUpdate": null,
            "RolesAllowedToDelete": null,
            "IdsAllowedToDelete": null,
            "WorkflowId": "",
            "ActivityName": "",
            "RolesRequireToExecute": [
                "appuser"
            ],
            "ActivityType": "",
            "StateClassName": "Selise.Ecap.Workflow.Infrastructure.StateBase"
        }


        function workFlowList() {
            var entity = 'Workflows';
            var query = {};
            mongoService.get(entity, query).then(function (workflowList) {
                $scope.workflowList = workflowList;
            });
        }

        vm.getEntityName = function () {
            var workflowId = vm.workflowName._id;
            vm.entityName = workflowService.getEntityName(workflowId);
            // console.log(vm.entityName);
        }

        vm.addActivity = function () {
            console.log("hi");
            // $scope.activityInfos.$submitted = true;
            if (!$scope.activityInfos.$invalid) {
                console.log("hi");
            }
        }


        function Init() {
            workFlowList();
        }

        Init();
    }

    constructor.$inject = ["$scope", "$locale", "$mdDialog", "mongoService", "workflowService"];
})();