import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Bike } from 'src/app/models/bike';
import { Observable } from 'rxjs';

const apiUrl2 = 'http://localhost:4000/bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  //products: Product[] = [
  //  new Product(1, 'Product 1', 'This is the product 1 description. The product is really kool!', 100),
  //  new Product(2, 'Product 2', 'This is the product 2 description. The product is really kool!', 150),
   // new Product(3, 'Product 3', 'This is the product 3 description. The product is really kool!', 50),
   // new Product(4, 'Product 4', 'This is the product 4 description. The product is really kool!', 200),
  //  new Product(5, 'Product 5', 'This is the product 5 description. The product is really kool!', 100),
  //  new Product(6, 'Product 6', 'This is the product 6 description. The product is really kool!', 150),
   // new Product(7, 'Product 7', 'This is the product 7 description. The product is really kool!', 250),
   // new Product(8, 'Product 8', 'This is the product 8 description. The product is really kool!', 300),
   // new Product(9, 'Product 9', 'This is the product 8 description. The product is really kool!', 300),
   // new Product(10, 'Product 10', 'This is the product 8 description. The product is really kool!', 300),
   // new Product(11, 'Product 11', 'This is the product 8 description. The product is really kool!', 300),
   // new Product(12, 'Product 12', 'This is the product 8 description. The product is really kool!', 300),
   //new Product(13, 'Product 13', 'This is the product 8 description. The product is really kool!', 300),
  // new Product(14, 'Product 14', 'This is the product 8 description. The product is really kool!', 300),
  // new Product(14, 'Product 14', 'This is the product 8 description. The product is really kool!', 300),
 // ]

  constructor( private http: HttpClient) { }

  getbike(): Observable<Bike[]> {
    //TODO: Populate products from an API and return an Observable
    return this.http.get<Bike[]>(apiUrl2);
  }
}
