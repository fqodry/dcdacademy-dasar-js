class Animal {
	constructor(name, weight, height) {
		this.name = "John";
		this.weight = 9;
		this.height = 20;
	};
	_genus = [];
	totalFoot;
	hasHair = true;

	walking = function(place) {
		console.log(this.name, 'is walking at', place);
	}; //regular function

	eating = (food) => {
		console.log(this.name, 'is eating', food);
	}; //arrow function
}

class Cat extends Animal {
	constructor(name, weight, height, age) {
		super(weight, height);
		this.name = name;
		this.age = age;
	};

	walking = (place) => {
		super.walking(place);
		console.log("Cat can walking too..");
	};
}

const cat1 = new Cat("Bellinda");
cat1.walking("attic");