import { Component, OnInit } from '@angular/core';
import { Cycle} from 'src/app/models/cycle';
import { CycleService} from 'src/app/services/cycle.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {
  cycleList: Cycle[] = []
  private data:any = []
  constructor(private CycleService : CycleService) { }

  ngOnInit(){
    this.CycleService.getcycle().subscribe((cycle) => {
      this.cycleList = cycle;
    })
  }

}
