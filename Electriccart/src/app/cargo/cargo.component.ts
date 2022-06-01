import { Component, OnInit } from '@angular/core';
import { Cargo} from 'src/app/models/cargo';
import { CargoService} from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  cargoList: Cargo[] = []
  private data:any = []
  constructor(private CargoService : CargoService) { }

  ngOnInit(){
    this.CargoService.getcargo().subscribe((cargo) => {
      this.cargoList = cargo;
    })
  }

}
