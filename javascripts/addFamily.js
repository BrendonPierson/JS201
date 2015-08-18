define([], function(){
  return {
    addFamilyMember: function(){
    var famMember = {
      name: $("#name").val(),
      age: $("#age").val(),
      sex: $('input:checked').val(),
      skillsArray: $("#skills").val().split(',')
    };
    $.ajax({
      url: "https://nss-brendon-family.firebaseio.com/family.json",
      method: "POST",
      data: JSON.stringify(famMember)
    }).done(function(){
      console.log("successfully added fammember");
    });



    }
  };
});