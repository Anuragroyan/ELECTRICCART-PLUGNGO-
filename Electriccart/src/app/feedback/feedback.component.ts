import { Component, OnInit } from '@angular/core';
import { FeedbackService} from '../shared/feedback.service';
import {NgForm} from '@angular/forms';
import {Feedback} from '../shared/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers:[FeedbackService]
})
export class FeedbackComponent implements OnInit {
  constructor(public feedbackService: FeedbackService) { }

  ngOnInit() {
    this.resetForm();
     }

     resetForm(form?: NgForm){
       if (form)
         form.reset();
       this.feedbackService.selectedFeedback = {
         _id: "",
         Names: "",
         email_id: "",
         feedback: ""
       }  
     }
    onSubmit (form: NgForm) {
      if (form.value._id == ""){
       this.feedbackService.postFeedback(form.value).subscribe((res)=>{
       this.resetForm(form);
      
       });
      }
    }
   
}
export class feedback {}
