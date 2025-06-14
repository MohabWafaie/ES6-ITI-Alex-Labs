class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  static count = 0;

  constructor(wheels = 2, speed = 'fast enough') {
    super(wheels, speed);
    Bike.count++;
  }

  static getCount() {
    return Bike.count;
  }
}

const b1 = new Bike();
console.log(Bike.getCount());
const b2 = new Bike(4, 'rocket');
console.log(b2);
console.log(Bike.getCount());
const b3 = new Bike(2, 'slow');
console.log(Bike.getCount());

