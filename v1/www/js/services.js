angular.module('app.services', [])

.factory('MeatService', ['$q', function($q){
  // temp data
  var meatTypes = [
    {
      id:0,
      name:"beef",
      cuts: [
        {
        id:0,
        name: "porterhouse",
        urlName: "porterhouse",
        groupName: "beef",
        desc: "this is a tasty meat",
        cookMethods: [
          "grill", "sear"
        ]},
        {
        id:1,
        name: "ribeye",
        urlName: "ribeye",
        groupName: "beef",
        desc: "this is a tasty meat",
        cookMethods: [
          "grill", "sear"
        ]}
      ]
    },
    {
      id:1,
      name:"lamb",
      cuts: [
        {
        id:0,
        name: "tenderloin",
        urlName: "tenderloin",
        groupName: "lamb",
        desc: "this is a tasty meat",
        cookMethods: [
          "grill", "sear"
        ]},
        {
        id:1,
        name: "chump chop",
        urlName: "chump_chop",
        groupName: "lamb",
        desc: "this is a tasty meat",
        cookMethods: [
          "grill", "sear"
        ]},
        {
        id:2,
        name: "Lamb Shank",
        urlName: "lamb_shank",
        groupName: "lamb",
        desc: "this is a tasty meat",
        cookMethods: [
          "braise", "smoke"
        ]}
      ]
    },
    {
      id:2,
      name:"poultry",
      cuts: [
        {
        id:0,
        name: "whole roster",
        urlName: "whole_roster",
        groupName: "poultry",
        desc: "this is a tasty meat",
        cookMethods: [
          "grill", "bake", "smoke"
        ]},
        {
        id:1,
        name: "thigh",
        urlName: "thigh",
        groupName: "poultry",
        desc: "this is a tasty meat",
        cookMethods: [
          "grill", "sear", "bake", "smoke"
        ]}
      ]
    },
    {
      id:3,
      name:"pork",
      cuts: [
        {
        id:0,
        name: "Pork Chop",
        urlName: "pork_chop",
        groupName: "pork",
        desc: "this is a tasty meat",
        cookMethods: [
          "grill", "sear"
        ]},
        {
        id:1,
        name: "Pork Shoulder",
        urlName: "pork_shoulder",
        groupName: "pork",
        desc: "this is a tasty meat",
        cookMethods: [
          "smoke", "braise", "slow cooker"
        ]}
      ]
    }
  ];

  var activeMeatGroupID,
  activeMeatGroup,
  activeMeatname = "";

  return {
    getMeatTypes:function() {
      var deferred = $q.defer();

      deferred.resolve(meatTypes);
      return deferred.promise;
    },

    getMeatGroup:function(name) {
      var deferred = $q.defer();
      activeMeatname = name;

      console.log("name: " + name);
      console.log("activeMeatname: " + activeMeatname);

      for(var i=0; i<meatTypes.length; i++) {
        if(meatTypes[i].name == activeMeatname) {
          activeMeatGroup = meatTypes[i];
          
          console.log("MATCHED meatTypes[i]: " + activeMeatGroup.id);
          break;
        }
      }

      // console.log("SERVICES: id: " + id);
      // activeMeatGroupID = id;
      deferred.resolve(activeMeatGroup);
      console.log("activeMeatGroup: " + activeMeatGroup);
      return deferred.promise;
    },

    getMeat:function(url_name) {
      var deferred = $q.defer();

      console.log("url_name: " + url_name);
      // console.log(activeMeatGroup[0])
      // deferred.resolve(meatTypes[meatID]);
      return deferred.promise;
    }
  }

}])

.service('BlankService', [function(){

}]);

