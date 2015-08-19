requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery' : '../bower_components/jquery/dist/jquery.min',
    'firebase' : '../bower_components/firebase/firebase',
    'hbs' : '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap' : '../bower_components/bootstrap/dist/js/bootstrap.min',
    'lodash' : '../bower_components/lodash/lodash.min',
    'jqueryui': '../jquery-ui/jquery-ui.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["jquery", "hbs", "bootstrap", "lodash", "firebase", 
  "populateHTML", "addFamily", "delete", "editFamily"], 
  function($, Handlebars, bootstrap, _, _firebase, populateHTML, 
    addFamily, deleteFam, editFamily){

    var ref = new Firebase("https://nss-brendon-family.firebaseio.com/");

    ref.child('family').on('value', function(data){
      var family = data.val();
      console.log(family);
      populateHTML.putFamilyInHTML(family);

    $("#family-members").on('click', '#deleteFamilyMember', function(){
      deleteFam.deleteFamilyMember($(this).siblings("h3").text(), family);
    });


    $("#family-members").on('click', '#editFamilyMember', function(){
      editFamily.displayEditForm($(this).parent().siblings("h3").text(), family);
    });

    $("#addFamilyMember").click(function(){
      addFamily.addFamilyMember(ref);
    });




    $("#saveFamilyMember").click(function(){
      editFamily.submitEditForm(family);
    });

    }); //end fb data snapshot function


  } //end require js function
);//end require js 