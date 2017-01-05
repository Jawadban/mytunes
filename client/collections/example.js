var Person = Backbone.Model.extend({

    initialize: function () {
        console.log(" person is initialized");
    },
    defaults: {
        name: "underfined",
        age:"underfined"
    }
});

var People = Backbone.Collection.extend({
    initialize: function () {
        console.log("people collection is initialized");
        this.bind('add', this.onModelAdded, this);
        this.bind('remove', this.onModelRemoved, this);
    },
    model: Person,
    onModelAdded: function(model, collection, options) {
        console.log("options = ", options);
        alert("added");
    },
    onModelRemoved: function (model, collection, options) {
        console.log("options = ", options);
        alert("removed");
    },
});

//var person = new Person({ name: "joe1" });
var people = new People();



//people.add([{ name: "joe2" }]);
people.add([{ name: "joe1" }]);
people.add([{ name: "joe2" }]);
people.add([{ name: "joe3" }]);
people.add([{ name: "joe4" }]);
people.add([{ name: "joe5" }]);

people.remove([{ name: "joe3" }]);



console.log(people.toJSON());