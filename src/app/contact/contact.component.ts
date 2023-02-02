import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatFormField} from '@angular/material/form-field'
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  public formContact = this.formBuilder.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    phone: ["", [
      Validators.minLength(11),
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    message: ["", [
      Validators.minLength(20),
      Validators.required
    ]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private _notificationService: NotificationService
    ){}

  ngOnInit(): void {
    
  }

  public sendForm(){
    this._notificationService.notificar("Form sent successfully.")
    this.formContact.reset();
  }

}
