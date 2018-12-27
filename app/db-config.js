(function () {
    "use strict";

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/slpc-workflowtest";

    angular.module('app').service('mongoService', constructor);
    constructor.$inject = ["$q"];

    function constructor($q) {


        return {
            insert: insert,
            get: get,
            newGuid: newGuid
        };


        function newGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function get(entity, query) {
            var deferred = $q.defer();
            MongoClient.connect(url, function (err, db) {
                var col = db.collection(entity);
                // Show that duplicate records got dropped
                col.find(query).toArray(function (err, items) {
                    db.close();
                    deferred.resolve(items);
                });
            });
            return deferred.promise;
        }

        function insert(entity, data) {
            // data array
            var deferred = $q.defer();
            MongoClient.connect(url, function (err, db) {
                var col = db.collection(entity);
                // Show that duplicate records got dropped
                col.insert(data, { w: 1 }, function (err, result) {
                    db.close();
                    deferred.resolve('done');
                });
            });
            return deferred.promise;
        }
    }
})();