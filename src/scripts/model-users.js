var Backbone = require('Backbone')
var $ = require('jquery')

var UserModel = Backbone.Model.extend({
    idAttribute: 'email'
});


var UserCollection = Backbone.Collection.extend({

    model: UserModel,
    // url: "",

    parse: function(jsonCollection){
        console.log(jsonCollection)
        return jsonCollection.results

    },

    initialize: function(qryStr){
      this.url = "https://randomuser.me/api?" + qryStr

  },

})

module.exports = UserCollection
