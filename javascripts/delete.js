define(["lodash"], function(_){
  return {
    deleteFamilyMember: function(name, data){
      console.log("name to delete: ", name);

      var key = _.findKey(data, {'name': name});
      console.log("key to delete", key);
      $.ajax({
        url: "https://nss-brendon-family.firebaseio.com/family/" + key + ".json",
        method: "DELETE"
      }).done(function(){
        console.log("successfully deleted family member");
      });
    }
  };
});