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

    get activity () {
        const today = new Date();
        const hour = today.getHours();

        if(hour > 8 && hour <= 20) {
            return ' is playing';
        }else{
            return ' is sleeping';
        }
    }

    get owner (){
        return this._owner;
    }

    set owner(owner){
        this._owner = owner;
        console.log(`setter called: ${owner}`);
    }
}

class Owner {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    set phone(phone){
        const phoneNormalize = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalize;
    }

    get phone(){
        this._phone = phone;
    }
}

const nuchin = new Pet("dog", 27, "peludo", "whoofff");
//console.log(nuchin);

//nuchin.speak();
//console.log(nuchin.activity);
nuchin.owner = new Owner('Jesus', '8518 Phinney Ave N ');
nuchin.owner.phone = '(206) 851 0221';
//console.log(nuchin.owner._phone);
//console.log(nuchin.owner.address);
console.log(nuchin.owner);

