// Доработать приложение, спроектированное на семинаре.
// Добавить тип, описывающий "автомойку", "сервисную станцию".
// Продемонстрировать работу получившейся программы, создать несколько типов автомобилей,
// загнать каждый автомобиль на заправку, а затем и на автомойку.

class Car {
  _brand;
  _model;
  _color;
  _type;
  _wheels;
  _fuel;
  _gearbox;
  _engineVolume;

  constructor(brand, model, color, type, wheels, fuel, gearbox, engineVolume) {
    this._brand = brand;
    this._model = model;
    this._color = color;
    this._type = type;
    this._wheels = wheels;
    this._fuel = fuel;
    this._gearbox = gearbox;
    this._engineVolume = engineVolume;
  }

  move() {
    console.log("moving");
  }

  service() {
    console.log("service");
  }

  switchGear() {
    console.log("switch gear");
  }

  toggleLights() {
    console.log("toggle lights");
  }

  toggleWipers() {
    console.log("toggle wipers");
  }
}

class ServiceCar extends Car {
  cleanStreet() {
    console.log("cleaning street");
  }
}

class TruckCar extends Car {
  toggleAntiFogLights() {
    console.log("toggling anti fog");
  }

  moveBaggage() {
    console.log("moving baggage");
  }
}

class ServiceStation {
  clean(target, car) {
    if (car instanceof ServiceCar) {
      console.log("cleaning service car");
    }
    if (car instanceof TruckCar) {
      console.log("cleaning antifog lights for free");
    }
    switch (target) {
      case "front":
        console.log("cleaning front window", car._model);
        break;
      case "side":
        console.log("cleaning side windows", car._model);
        break;
      case "mirror":
        console.log("cleaning mirror", car._model);
        break;
      default:
        return;
    }
  }
}

class GasolineStation {
  fuel(fuelAble) {
    if (fuelAble._fuel === "gas") {
      console.log(`Gas for ${fuelAble._fuel} engine`);
    } else if (fuelAble._fuel === "diesel") {
      console.log(`Diesel for ${fuelAble._fuel} engine`);
    }
  }
}

const firstCar = new Car(
  "Audito",
  "Q5",
  "black",
  "hatch",
  4,
  "gas",
  "robot",
  2500
);
const secondCar = new ServiceCar(
  "Toyotino",
  "B3",
  "white",
  "lift",
  6,
  "diesel",
  "robot",
  2700
);
const thirdCar = new TruckCar(
  "Subarino",
  "D8",
  "silver",
  "hatch",
  6,
  "gas",
  "robot",
  2500
);
const fourthCar = new Car(
  "Nissano",
  "A1 4",
  "yellow",
  "hatch",
  3,
  "diesel",
  "robot",
  2400
);

const gasoline = new GasolineStation();
const serviceStation = new ServiceStation();

const autos = [firstCar, secondCar, thirdCar, fourthCar];

for (const vehicle of autos) {
  gasoline.fuel(vehicle);
}

for (const vehicle of autos) {
  const target = ["front", "side", "mirror"][Math.floor(Math.random() * 3)];
  serviceStation.clean(target, vehicle);
}
