requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery' : '../bower_components/jquery/dist/jquery.min',
    'firebase' : '../bower_components/firebase/firebase',
    'hbs' : '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap' : '../bower_components/bootstrap/dist/js/bootstrap.min',
    'lodash' : '../bower_components/lodash/lodash.min',
    'rating2' : '../bower_components/bootstrap-rating/bootstrap-rating.min',
    'jqueryui': '../jquery-ui/jquery-ui.min',
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'material': ['bootstrap'],
    'rating2' : ['bootstrap'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});