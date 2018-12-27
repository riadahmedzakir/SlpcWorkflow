(function () {
    "use strict";

    var _ = require('lodash');

    angular.module('app').service('workflowService', constructor);
    constructor.$inject = ["$q"];

    function constructor($q) {

        var vm = this;
        vm.WorkflowConfigs = {
            Workflow: [
                {
                    WorkflowId: "88db69d5-87a5-4868-ab6e-55d962e383eb",
                    NumberOfCategory: "default",
                    EntityName: "PolicyHolderDetails",
                    Type: null,
                    Name: "Policyholder details",
                },
                {
                    WorkflowId: "ac0664e0-2d7b-489f-ae6e-a27016687d9e",
                    NumberOfCategory: "default",
                    EntityName: "ChangeOfIntermediary",
                    Type: null,
                    Name: "Change of Intermediary"
                },
                {
                    WorkflowId: "52fa335e-8dd7-4b21-9cf5-eb8734dfaaab",
                    NumberOfCategory: "default",
                    EntityName: "LimitedPowerOfAttorney",
                    Type: null,
                    Name: "Limited Power of Attorney"
                },
                {
                    WorkflowId: "3cd9e6bc-093a-46a5-aa71-86b9f2fcefa8",
                    NumberOfCategory: "default",
                    EntityName: "SpecificMandateForInformationDisclosure",
                    Type: "Individual",
                    Name: "Specific Mandate",
                },
                {
                    WorkflowId: "4c15750b-a067-1699-af52-45ef7ab218e0",
                    NumberOfCategory: "default",
                    EntityName: "ApplicationProcess",
                    Type: null,
                    Name: "Application Process"
                },
                {
                    WorkflowId: "eb8d025e-3c7d-4dc4-aaaa-aebd22b9c693",
                    NumberOfCategory: "default",
                    EntityName: "ConfidentialReportLegalEntity",
                    Type: "Entity",
                    Name: "Confidential Report - Legal"
                },
                {
                    WorkflowId: "c8b77c4b-e952-46ac-a147-acb2ebc7eb72",
                    NumberOfCategory: "default",
                    EntityName: "ConfidentialReportIndividual",
                    Type: "Individual",
                    Name: "Confidential Report - Individuals"
                },
                {
                    WorkflowId: "11ecf431-3794-4072-9ad9-f0a234366864",
                    NumberOfCategory: "default",
                    EntityName: "TaxReportSelfCertificationEntity",
                    Type: "Entity",
                    Name: "Tax Reporting Self-certification - Entity"
                },
                {
                    WorkflowId: "89227dec-d343-44e9-928c-4a06334c3ecb",
                    NumberOfCategory: "default",
                    EntityName: "IntermediaryDeclaration",
                    Type: "Entity",
                    Name: "Intermediary Declaration"
                },
                {
                    WorkflowId: "0c0b7b11-e2b5-4f26-8af2-818c726c2c6b",
                    NumberOfCategory: "default",
                    EntityName: "TaxReportSelfCertificationNaturalPerson",
                    Type: "Individual",
                    Name: "Tax Reporting Self-certification – Natural Person"
                },
                {
                    WorkflowId: "51f655f6-b2b1-c555-4ade-1c441df0c405",
                    NumberOfCategory: "default",
                    EntityName: "VULApplicationProcess",
                    Type: null,
                    Name: "Application Form"
                },
                {
                    WorkflowId: "528e7d69-0454-4ec6-a3a2-f2d2783ce9dd",
                    NumberOfCategory: "default",
                    EntityName: "SgIntermediaryDeclaration",
                    Type: null,
                    Name: "SG Intermediary Declaration"
                },
                {
                    WorkflowId: "a10a22e0-e927-4ec0-86f0-a3b8389f0454",
                    NumberOfCategory: "default",
                    EntityName: "ConsultationReport",
                    Type: null,
                    Name: "Consultation Report"
                },
                {
                    WorkflowId: "5365d3b5-1263-4e5d-9d50-fcab580e0b77",
                    NumberOfCategory: "default",
                    EntityName: "Switch",
                    Type: null,
                    Name: "Switch"
                },
                {
                    WorkflowId: "b364ce6c-a914-4e8c-8165-39064ad831fd",
                    NumberOfCategory: "default",
                    EntityName: "AdditionalPremium",
                    Type: null,
                    Name: "Additional Premium"
                },
                {
                    WorkflowId: "491edf57-211c-449d-8b1e-294f45fdff86",
                    NumberOfCategory: "default",
                    EntityName: "Surrender",
                    Type: null,
                    Name: "Partial or Full Surrender"
                },
                {
                    WorkflowId: "062a00d0-56d1-4f75-9f8b-f00767159a9a",
                    NumberOfCategory: "default",
                    EntityName: "DedicatedFundInvestmentStrategy",
                    Type: null,
                    Name: "Change of Investment Strategy"
                },
                {
                    WorkflowId: "de1d007d-3d87-4739-86f7-8ca5b6157ed7",
                    NumberOfCategory: "default",
                    EntityName: "ChangeOfAddress",
                    Type: null,
                    Name: "Change of custodian and/or investment manager"
                },
                {
                    WorkflowId: "6aa29504-9ef3-4af2-b634-5631fbea2b45",
                    NumberOfCategory: "default",
                    EntityName: "AssignmentDonationAndPledgeOfTheContract",
                    Type: null,
                    Name: "Assignment, Donation and Pledge"
                },
                {
                    WorkflowId: "d48717fb-33e9-4746-be44-40649a08e3dc",
                    NumberOfCategory: "default",
                    EntityName: "AssignmentDonationAndPledgeOfTheContract",
                    Type: null,
                    Name: "Assignment,Donation and Pledge Individual"
                },
                {
                    WorkflowId: "48094ef4-0482-450e-bb99-e778e371106c",
                    NumberOfCategory: "default",
                    EntityName: "SgApplicationProcesss",
                    Type: null,
                    Name: "Singapore Application Processs"
                },
                {
                    WorkflowId: "c667160a-beed-2312-b28d-d15212f8232f",
                    NumberOfCategory: "default",
                    EntityName: "LossInsurancePolicy",
                    Type: null,
                    Name: "Loss of Insurance Policy"
                }
            ]
        }

        return {
            getEntityName: getEntityName
        }

        function getEntityName(workflowId) {
            var Workflow = _.find(vm.WorkflowConfigs.Workflow, function (workflow) {
                return workflow.WorkflowId === workflowId;
            })
            return Workflow.EntityName;
        }
    }
})();