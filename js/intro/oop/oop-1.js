// OOP - object oriented programming
// kalses pavadinimas is dideles raides ' Person ' 
//Lietuviskai tik del save ;] tai reikia keisti i eng.
// OOP - object oriented programming

// Dog, Cat, Car
// const audi = new Car();




console.log('Cars Information list');

function mobile(Car_list) {
  this.Car_list = Car_list;
  return 'mobile'[i];
}

class Car {
  constructor(brand, model, age, isNew, isVinCode, wheels, engine, gearbox, bodyType, odometer, warranty, color, comments) {
      this.Type = 'sportcar';
      this.brand = brand;
      this.model = model;
      this.age = age;
      this.isNew = isNew;
      this.isOldtimer = age >= 30;  
      this.isYoungtimer = age >= 20 && age < 30;  
      this.New = age < 3; 
      this.VinCode = isVinCode;
      this.wheels = wheels;
      this.engine = engine;
      this.gearbox = gearbox;
      this.body_type = bodyType;
      this.odometer = odometer;
      this.warranty = age <5;
      this.color = color;
      this.comments = comments;
  }
}
const Mitsuoka = new Car('Mitsuoka', 'Orohi', 1, true, 'HYU35351TR214', 'R19', 
  'V6 3.5-Biturbo 420Hp', 'Variator', 'coupe', '200km', Boolean, 'white',
  'new perfect condition car Japan rare luxury brand Mitsuoka Orochi 2025years V6 biturbo');

const TVR = new Car('TVR', '350i', 38, false, 'UVR3315613HK31', 'R17',
   'V8 3.5-litre 290Hp', 'Manual 5-speed', 'cabrio', '98000km', Boolean, 'green',
    'is the Oldtimers car TVR classic british, Just star and run.');  
   
const empty_youre_car = new Car('Unknown', 'Unknown', 0, true, 'Unknown', 'Unknown',
   'Unknown', 'Unknown', 'Unknown', 'Unknown', Boolean, 'Unknown', 'comments');  

console.table(Mitsuoka);
console.table(TVR);
console.table(empty_youre_car);
console.log('________________________________________________________________________________________________');

console.log('Animal list');

function animals() {
  return 'animals'[i];
}
class Animals {
  constructor(type, breed, legs, tail, color, age, condition, vaccine, trophy, defect, comment) {
    this.type = type;
    this.breed = breed;
    this.legs = legs;
    this.tail = tail;
    this.color = color;
    this.age = age;
    this.condition = condition;
    this.vaccine = vaccine;
    this.trophy = trophy;
    this.defect = defect;
    this.comment = comment;
    }
}
const Hector = new Animals('dog', 'pitbullterrier', 4, 'short', 'white', 1, 'healty', 'yes', 'yes', 'no', 'healty perfect champion dog');

const Evabraun = new Animals('cat', 'Scottish Fold', 4, 'long', 'silver', 0.5, 'heart problem', 'yes', 'no', 'ear', 'perfect beauty breed cat');

console.table(Hector);
console.table(Evabraun);


