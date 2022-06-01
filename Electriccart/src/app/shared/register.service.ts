import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {Register} from './register.model';
@Injectable()
export class RegisterService {
 
 selectedRegister: Register;
 registers: Register[];
 readonly baseURL="http://localhost:3000/register";
 constructor(private http:HttpClient) { }
 
 postRegister(registers:Register){
     return this.http.post(this.baseURL,registers);
 }

 getRegisterList(){
    return this.http.get(this.baseURL);
  }

  putRegister(registers:Register){
      return this.http.put(this.baseURL+ `/${registers._id}`,registers);
  }

  deleteRegister(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}


