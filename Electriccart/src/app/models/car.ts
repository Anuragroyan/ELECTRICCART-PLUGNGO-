export class Car {
    id: number;
    name: string;
    battery: string;
    speedy: string;
    engine: string;
    torque: string;
    warranty: number;
    feature: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, battery = '', speedy = '', engine = '', torque = '', warranty = 0, feature = '', price = 0, imageUrl = 'https://tse4.mm.bing.net/th?id=OIP.zHkKvcukRmoKYOJlPmKlzgHaE6&pid=Api&P=0&w=246&h=164') {
      this.id = id
      this.name = name
      this.battery = battery
      this.speedy = speedy
      this.engine = engine
      this.torque = torque
      this.warranty = warranty
      this.feature = feature
      this.price = price
      this.imageUrl = imageUrl
    }
  }