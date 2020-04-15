class Pet {
    constructor(animal, age, breed, sound){
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    speak (){
        console.log(this.sound);
    }
}

const nuchin = new Pet("dog", 27, "jotito peludo", "whoofff");
console.log(nuchin);

nuchin.speak();