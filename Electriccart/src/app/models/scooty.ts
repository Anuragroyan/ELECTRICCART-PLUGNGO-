export class Scooty {
    id: number;
    name: string;
    battery: string;
    speed: string;
    weight: string;
    chargingtime: string;
    price: number;
    imageUrl: string;
  
    constructor(id, name, battery = '', speed = '' , weight = '', chargingtime = '',price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
      this.id = id
      this.name = name
      this.battery = battery
      this.speed = speed
      this.weight = weight
      this.chargingtime = chargingtime
      this.price = price
      this.imageUrl = imageUrl
    }
  }