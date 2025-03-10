
// Ikurti trieju lygiu extend automobilius... ;]]]]]

class MotoAutoTransport  {
    constructor(brand, model, engine, power, fuel, gearbox, transmision, body_type,
        co2, isNoEcology, isEcology, age, New, price, warranty, wheels, VinCode,
         odometer, color, sound, emoji, comments)  {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.power = power;
        this.fuel = fuel;
        this.gearbox = gearbox;
        this.transmision = transmision;
        this.body_type = body_type;
        this.co2 = co2;
        this.isNoEcology = co2 >= 130;  
        this.isEcology = co2 >= 0 && co2 < 130;  
        this.age = age;
        this.New = age < 3; 
        this.price = price;
        this.warranty = age <5;
        this.wheels = wheels;
        this.VinCode = VinCode;
        this.odometer = odometer;
        this.color = color;
        this.sound = sound;
        this.emoji = emoji;
        this.comments = comments;
    }
    ChekEco(){
        return `the Co2 of this vichle is ${this.isEcology}.`;
    }
    ChekPower(){
        return `the power of this vichle is ${this.power}.`;
    }
    ChekOld(){
        return `the age of this vichle is ${this.age} old`;
    }
    ChekOdometer(){
        return `the odometer of this vichle is ${this.odometer} km`;
    }
    ChekWarranty(){
        return `the warranty have this vichle ${this.warranty}`;
    }
    ChekPrice(){
        return (`the price of this vichle ${this.price}`);
    }
}
class Automobiliai extends MotoAutoTransport {
    constructor(...args) {
        super(...args);
        
    }
}
class Elektromobiliai extends Automobiliai {
    constructor(...args) {

        super(...args);
        this.emoji = '⚡';
    }

}
class VidausDegimo extends Automobiliai {
    constructor(...args) {
        super(...args);
        
    }

}
class CustomsCar extends Automobiliai {
    constructor(...args) {
        super(...args);
        
        }
}

class Vilkikai extends MotoAutoTransport {
    constructor(...args) {
        super(...args);
     }
}

    const Tesla = new Elektromobiliai('Tesla', 'Model S', 'Electric', '1200hp', 'gasoline', 'automatic', 'All wheels drive', 
    'coupe 4door', '0', Boolean, Boolean, 9, Boolean, 32000, Boolean, 'R20 240/35 all', '5YJSA1E26HF000000', 156234,
    'white purple', '▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:0', '⚡', ' ride for free  youre ilusion'
);
    const Mitsuoka = new VidausDegimo('Mitsuoka', 'Orohi', 'V6 3.5-Biturbo', '420hp' ,'gasoline', 'automatic 7 speed', 'rear wheel drive', 
    'roadster', 230, Boolean, Boolean, 1, Boolean, 102000, Boolean,'R19 255/35 305/30', 'JH4KA4650JC000000', 5,
     'White', '▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:10', '🏎️🈵', 'Luxury fast JDM');

    const Mercedes = new CustomsCar('Mercedes', 'Clk', 'V8 Biturbo', '950hp' ,'gasoline', 'automatic 7 speed', 'rear wheel drive', 
        'Coupe', 350, Boolean, Boolean, 18, Boolean, 40000, Boolean,'R19 245/35 375/30', 'WDD21C2154151WQA21', 6000,
         'Purple', '▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:10', '🏎️🈵', 'Drift car ////AMG㉦𝗕𝗲𝗻𝘇')
         
    const Bmw = new VidausDegimo('BMW', '550i', 'V8', '270hp' ,'gasoline/LPG', 'automatic 7 speed', 'rear wheel drive', 
            'sedan', 290, Boolean, Boolean, 20, Boolean, 3800, Boolean,'R18 245/45 375/40', 'unkndown', 356000,
             'black', '▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:10', '𝑩𝑴𝑾 ⊕', 'good condition v8 daily')


             const MAN = new Vilkikai('MAN', 'HH45', 'V8', '620hp' ,'Diesel/LPG', 'automatic 12 speed', 'rear wheel drive', 
                'Truck', 520, Boolean, Boolean, 3, Boolean, 59000, Boolean,'R23,5 245/45 375/40', 'unkndown', 325000,
                 'black', '▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:10', '🚛 ', 'good condition Truck')

console.table(Tesla);
console.table(Mitsuoka);
console.table(Mercedes);
console.table(Bmw);
console.table(MAN);

console.log('Mitsuoka',Mitsuoka.ChekEco());
console.log('Mitsuoka',Mitsuoka.ChekPower());
console.log('Mitsuoka',Mitsuoka.ChekOld());
console.log('Mitsuoka',Mitsuoka.ChekOdometer());
console.log('Mitsuoka',Mitsuoka.ChekWarranty());
console.log('Mitsuoka',Mitsuoka.ChekPrice());
console.log('---------------');
console.log('Tesla',Tesla.ChekEco());
console.log('Tesla',Tesla.ChekPower());
console.log('Tesla',Tesla.ChekOld());
console.log('Tesla',Tesla.ChekOdometer());
console.log('Tesla',Tesla.ChekWarranty());
console.log('Tesla',Tesla.ChekPrice());
console.log('---------------');
console.log('Mercedes',Mercedes.ChekEco());
console.log('Mercedes',Mercedes.ChekPower());
console.log('Mercedes',Mercedes.ChekOld());
console.log('Mercedes',Mercedes.ChekOdometer());
console.log('Mercedes',Mercedes.ChekWarranty());
console.log('Mercedes',Mercedes.ChekPrice());
console.log('---------------');
console.log('Bmw',Bmw.ChekEco());
console.log('Bmw',Bmw.ChekPower());
console.log('Bmw',Bmw.ChekOld());
console.log('Bmw',Bmw.ChekOdometer());
console.log('Bmw',Bmw.ChekWarranty());
console.log('Bmw',Bmw.ChekPrice());
console.log('---------------');