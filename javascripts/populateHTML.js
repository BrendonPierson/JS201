define (["jquery","hbs"], function($, Handlebars){

return {
//functions for turning json into html through handlebars template
//each takes an object that has an array of the data
    putFamilyInHTML: function (data) {
      require(['hbs!../templates/familyMembers'],function(familyTemplate){
        $("#family-members").html(familyTemplate(data));
      });
    } 
  };
});