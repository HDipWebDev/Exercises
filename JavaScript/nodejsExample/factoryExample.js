function Factory(){
    this.createFord = function (type) {
        var model;

        if (type === "Fiesta") {
            model = new Fiesta();
        } else if (type === "Focus") {
            model = new Focus();
        } else if (type === "Mondeo") {
            model = new Mondeo();
        }

        model.type = type;

        return model;
    }
}

var Fiesta = function() {
    this.engine = "1.2 litre";
		this.doors = 3;
};

var Focus = function() {
    this.engine = "1.6 litre";
				this.doors = 5;
};

var Mondeo = function() {
    this.engine = "2.0 litre";
		this.doors = 4;
};


var cars = [];
var factory = new Factory();

cars.push(factory.createFord("Fiesta"));
cars.push(factory.createFord("Focus"));
cars.push(factory.createFord("Mondeo"));

console.log(cars);
