import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registerForm: FormGroup;
  nameInput: FormControl;
  occupationInput: FormControl;
  emailInput: FormControl;
  subjectInput: FormControl;
  contentInput: FormControl;

  
  constructor(){

    this.nameInput = new FormControl("", Validators.required);
    this.occupationInput = new FormControl("");
   
    this.emailInput = new FormControl("", Validators.required);
    this.subjectInput = new FormControl("", Validators.required);
    this.contentInput = new FormControl("", Validators.required);

    this.registerForm = new FormGroup(
      {
        name: this.nameInput,
        occupation: this.occupationInput,
        email: this.emailInput,
        subject: this.subjectInput,
        content: this.contentInput,
      }
    )
  }

  ngOnInit(): void {}

  onSubmit(): void {
    alert("Thanks for contacting me");
    this.registerForm.reset()
    for (let field in this.registerForm.controls) {
      this.registerForm.controls[field].clearValidators();
      this.registerForm.controls[field].updateValueAndValidity();
    }
  }
}

