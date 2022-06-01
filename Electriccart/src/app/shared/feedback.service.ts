import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/Operators';

import {Feedback} from './feedback.model';
@Injectable()
export class FeedbackService {
 selectedFeedback: Feedback;
 readonly baseURL="http://localhost:3000/feedback";
  constructor(private http:HttpClient) { }

  postFeedback(Feedback:Feedback){
    return this.http.post(this.baseURL,Feedback);
  }
}
