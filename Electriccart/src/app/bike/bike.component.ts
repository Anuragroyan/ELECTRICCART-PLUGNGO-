import { Component, OnInit } from '@angular/core';
import { Bike} from 'src/app/models/bike';
import { BikeService} from 'src/app/services/bike.service';
@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  bikeList: Bike[] = []
  private data:any = []
  constructor(private BikeService: BikeService) { }

  ngOnInit() {
    this.BikeService.getbike().subscribe((Bike) => {
      this.bikeList = Bike;
    })
  }

}
