export class Cargo {
    id: number;
    name: string;
    battery: string;
    speed: string;
    engine: string;
    capacity: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, battery = '', speed = '', engine = '', capacity = '', price = 0, imageUrl = 'https://tse4.mm.bing.net/th?id=OIP.zHkKvcukRmoKYOJlPmKlzgHaE6&pid=Api&P=0&w=246&h=164') {
      this.id = id
      this.name = name
      this.battery = battery
      this.speed = speed
      this.engine = engine
      this.capacity = capacity
      this.price = price
      this.imageUrl = imageUrl
    }
  }