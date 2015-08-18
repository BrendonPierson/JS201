define(["jquery", "lodash", "firebase"], function($, _, _firebase){
  return {
    displayEditForm: function(name, data){
      console.log("name to edit: ", name);

      var key = _.findKey(data, {'name': name});

      console.log("key to edit", key);
      console.log("data on key", data[key].name);
      // var Ref = new Firebase('https://nss-brendon-family.firebaseio.com/family/' + key);
      $("#family-members").slideUp('slow');
      $("#editFamilyMemberDiv").slideDown('slow');
      $("#name").val(data[key].name);
      $("#age").val(data[key].age);
      $("#skills").val(data[key].skills);

      if (data[key].sex === 'Male'){
        $("input[value='Male']").attr('checked', 'checked');
      } else {
        $("input[value='Female']").attr('checked', 'checked');
      }
    },
    submitEditForm: function(data){
      var skillsArray = $("#skills").val().split(',');
      var keyname = $("#name").val();
      var famMember = {  
        name: $("#name").val(),
        age: $("#age").val(),
        sex: $('input:checked').val(),
        skills: skillsArray
      };
      console.log("name to update: ", name);

      var key = _.findKey(data, {'name': keyname});

      console.log("key to update", key);

      var Ref = new Firebase('https://nss-brendon-family.firebaseio.com/family/' + key);
      Ref.set(famMember);





      $("#name").val('');
      $("#age").val('');
      $("#skills").val('');
      $('#editFamilyMemberDiv').slideUp('slow');
      $("#family-members").slideDown('slow');
    }
  };
});

    // addFamilyMember: function(ref){
    // var skillsArray = $("#skills").val().split(',');
    // var keyname = $("#name").val();
    // var famMember = {  
    //   name: $("#name").val(),
    //   age: $("#age").val(),
    //   sex: $('input:checked').val(),
    //   skills: skillsArray
    // }

    // ref.child('family').push(famMember);
    
    //   $("#name").val('');
    //   $("#age").val('');
    //   $("#skills").val('');
    //   $('#myModal').modal('hide');