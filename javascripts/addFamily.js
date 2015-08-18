define([], function(){
  return {
    addFamilyMember: function(ref){
    var skillsArray = $("#skills").val().split(',');
    var keyname = $("#name").val();
    var famMember = {  
      name: $("#name").val(),
      age: $("#age").val(),
      sex: $('input:checked').val(),
      skills: skillsArray
    }

    ref.child('family').push(famMember);
    
      $("#name").val('');
      $("#age").val('');
      $("#skills").val('');
      $('#myModal').modal('hide');


      // console.log("raw input skilss", $("#skills").val());
      // console.log("skillsArray", skillsArray);
      // console.log("sex: ", $('input:checked').val());
    // $.ajax({
    //   url: "https://nss-brendon-family.firebaseio.com/family.json",
    //   method: "POST",
    //   data: JSON.stringify(famMember)
    // }).done(function(){
    //   console.log("successfully added fammember");
    //   $("#name").val('');
    //   $("#age").val('');
    //   $("#skills").val('');
    //   // $("#myModal").slideUp("slow");
    //   $('#myModal').modal('hide');
    // });



    }
  };
});