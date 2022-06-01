import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './models/product';
import { Car} from './models/car';
import { Bike} from './models/bike';
import { Scooty} from './models/scooty';
import { Cycle } from './models/cycle';
import { Cargo } from './models/cargo';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';
  getproducts() {
    return this.http.get(`${this.url}/products`).pipe(
      catchError(this.handleError<Product[]>('products', [])));
  }

  url1 = 'http://localhost:4000';
  getcar() {
    return this.http.get(`${this.url1}/car`).pipe(
      catchError(this.handleError<Car[]>('car', [])));
  }

  url2 = 'http://localhost:4000';
  getbike() {
    return this.http.get(`${this.url2}/bike`).pipe(
      catchError(this.handleError<Bike[]>('bike', [])));
  }

  url3 = 'http://localhost:4000';
  getscooty() {
    return this.http.get(`${this.url3}/scooty`).pipe(
      catchError(this.handleError<Scooty[]>('scooty', [])));
  }

  url4 = 'http://localhost:4000';
  getcycle() {
    return this.http.get(`${this.url4}/cycle`).pipe(
      catchError(this.handleError<Cycle[]>('cycle', [])));
  }

  url5 = 'http://localhost:4000';
  getcargo() {
    return this.http.get(`${this.url5}/cargo`).pipe(
      catchError(this.handleError<Cargo[]>('cargo', [])));
  }

  handleError<T>(arg0: string, arg1: undefined[]): (err: any, caught: import("rxjs").Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  }
  
}
