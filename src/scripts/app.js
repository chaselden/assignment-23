//
// $.getJSON("https://randomuser.me/api?results=24")
//    .then((d)=>{
//       console.log(d.results)
//
//       var coll = new Backbone.Collection()
//       coll.add(d.results[3])
//       coll.add(d.results[2])
//       coll.add(d.results[1])
//
//       var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
//       view.render(coll)
//    })

var Backbone = require('Backbone')
var $ = require('jquery')


var UserCollection = require('./model-users.js')
var ViewTemplateConstructor = require('./viewTemplateContructor.js')
var cardsTemplateFn = require('./view-cards.js')

var AppRouter = Backbone.Router.extend({
  routes: {

    "": "showHomePage",
    "nationality/:nat/gender/:gender": "showNatAndGend",
    "gender/:gen": "showGen",
    "nationality/:nat": "showNat",

  },


showHomePage: function(){
  document.querySelector('#app-container').innerHTML = "HOME PAGE"

  var coll = new UserCollection("results=24")
  coll.fetch().then(function(){
     console.log(coll)
     var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
     view.render(coll)

  })

},

showNat: function(natArg){
  var natColl = new UserCollection('results=24&nat=' + natArg)
  natColl.fetch().then(function(){
      var natPageView = new ViewTemplateConstructor('#app-container',cardsTemplateFn)
      natPageView.render(natColl)
  })


},


showGen: function(genArg) {
  var genColl = new UserCollection('results=24&gender=' + genArg)
  genColl.fetch().then(function(){
      var genPageView = new ViewTemplateConstructor('#app-container',cardsTemplateFn)
      genPageView.render(genColl)
  })



},

showNatAndGend:function(natArg2, genArg2){
    var natGenColl = new UserCollection('results=24&nat=' + natArg2 + '&gender=' + genArg2)
    // console.log(natGenColl.url);
    natGenColl.fetch().then(function(){
        var natGenPageView = new ViewTemplateConstructor('#app-container',cardsTemplateFn)
        natGenPageView.render(natGenColl)
    })

},

initialize: function(rVal){
Backbone.history.start();

},
  })

var app = new AppRouter();
