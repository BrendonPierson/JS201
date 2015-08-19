define(["jquery", "firebase"], function($, _firebase){
  return {
    addFamilyMember: function() {
      var skillsArray = $("#skillsToAdd").val().split(',');

      var famMember = {
        name: $("#nameToAdd").val(),
        age: $("#ageToAdd").val(),
        sex: $('input:checked').val(),
        skills: skillsArray
        };

      console.log("name", famMember);
        
      var Ref = new Firebase('https://nss-brendon-family.firebaseio.com/family/');
      Ref.push(famMember);
    
      $("#nameToAdd").val('');
      $("#ageToAdd").val('');
      $("#skillsToAdd").val('');
      $('#myModal').modal('hide');
    }
  };
});