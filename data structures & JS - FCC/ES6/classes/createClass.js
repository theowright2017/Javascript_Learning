
class Vegetable {
    constructor(name) {
    this.name = name;
    }
}


const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'





/////////////////////////////////
// getters and setters


// return celcius version of farenheit class


class Thermostat {
    constructor(temperature) {
        this._temperature = temperature
    }
    get temperature() { // celc
        return 5/9 * (this._temperature -32)
    }
    set temperature(updatedTemp) { // update to celc
        this._temperature = updatedTemp * 9 / 5 + 32
    }
}


const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
