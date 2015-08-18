define(["lodash", "firebase"], function(_, _firebase){
  return {
    deleteFamilyMember: function(name, data){


      console.log("name to delete: ", name);

      var key = _.findKey(data, {'name': name});
      console.log("key to delete", key);

      var Ref = new Firebase('https://nss-brendon-family.firebaseio.com/family/' + key);
      Ref.remove();

      // $.ajax({
      //   url: "https://nss-brendon-family.firebaseio.com/family/" + key + ".json",
      //   method: "DELETE"
      // }).done(function(){
      //   console.log("successfully deleted family member");
      // });
    }
  };
});