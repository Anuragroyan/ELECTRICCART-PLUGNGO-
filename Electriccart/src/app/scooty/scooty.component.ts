import { Component, OnInit } from '@angular/core';
import { Scooty} from 'src/app/models/scooty';
import { ScootyService} from 'src/app/services/scooty.service';

@Component({
  selector: 'app-scooty',
  templateUrl: './scooty.component.html',
  styleUrls: ['./scooty.component.css']
})
export class ScootyComponent implements OnInit {
  scootyList: Scooty[] = []
  private data:any = []
  constructor(private ScootyService : ScootyService) { }

  ngOnInit(){
    this.ScootyService.getscooty().subscribe((scooty) => {
      this.scootyList = scooty;
    })
  }

}
