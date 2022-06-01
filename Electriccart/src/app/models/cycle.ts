export class Cycle {
    id: number;
    name: string;
    battery: string;
    throttle: string;
    pedal: string;
    gear: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, battery = '', throttle = '', pedal = '', gear = '', price = 0, imageUrl = 'https://tse4.mm.bing.net/th?id=OIP.zHkKvcukRmoKYOJlPmKlzgHaE6&pid=Api&P=0&w=246&h=164') {
      this.id = id
      this.name = name
      this.battery = battery
      this.throttle = throttle
      this.pedal = pedal
      this.gear = gear
      this.price = price
      this.imageUrl = imageUrl
    }
  }