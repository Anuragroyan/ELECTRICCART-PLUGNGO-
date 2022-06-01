import { Component, OnInit } from '@angular/core';
import { RegisterService} from '../shared/register.service';
import { NgForm } from '@angular/forms';
import { Register } from '../shared/register.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {
 
  constructor(public registerService: RegisterService) { }
  ngOnInit() {
    this.resetForm();
    this.refreshRegisterList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.registerService.selectedRegister = {
      _id: "",
    first_name: "",
    last_name: "",
    email_id : "",
    contact: null,
    password: ""
   }
  }
   onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.registerService.postRegister(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshRegisterList();
      });
    }
      else {
        this.registerService.putRegister(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshRegisterList();
        });
      }
  } 
  refreshRegisterList() {
    this.registerService.getRegisterList().subscribe((res)=> {
       this.registerService.registers = res as Register[];
    });
  }
    onEdit(registers:Register) {
      this.registerService.selectedRegister = registers;
    }
       

    onDelete(_id: string, form: NgForm) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.registerService.deleteRegister(_id).subscribe((res) => {
          this.refreshRegisterList();
          this.resetForm(form);
         
        });
      }
    }
     }
  
 export class register {}

