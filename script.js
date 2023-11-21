//complete this code
class Animal {
	constructor (species){
		this.species = "species";
	}
	makesound(){
		console.log("Generic animal sound");
	}
	 get species() {
    return this.species;
  }
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	puff(){
		console.log("puff");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
