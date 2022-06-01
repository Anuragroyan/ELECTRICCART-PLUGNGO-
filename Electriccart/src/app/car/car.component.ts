import { Component, OnInit } from '@angular/core';
import { Car} from 'src/app/models/car';
import { CarService} from 'src/app/services/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
   carList : Car[] = []
   private data:any = []
  constructor(private carService : CarService) { }

  ngOnInit(){
    this.carService.getcar().subscribe((car) => {
      this.carList = car;
    })
  }

}
