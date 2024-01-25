import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { AngularFireDatabase } from '@angular/fire/compat/database'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageSent: boolean;



  // Adding variables
  yourName: string;
  yourCompnay: string;
  yourPhone: string;
  yourEmail: string;
  yourSubject: string;
  yourMessage: string;
  items: Observable<any[]>;
  contactForm: FormGroup;

  // Setting the database 
  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private db: AngularFireDatabase
  ) {
    this.items = db.list('messages').valueChanges();
    // Passing in MD_Bootstrap form validation

    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormSubject: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
      ContactFormPhone: ['', Validators.required],
      ContactFormCompany: ['', Validators.required]

    });
  }
  // Pushing the contact-form to the firebase data base

  sendEmail() {
    // Popup message

    this.messageSent = true;
    setTimeout(() => {
      this.messageSent = null;
    }, 2000);
    this.db.list('/messages').push({
      contactName: this.yourName,
      ContactEmail: this.yourEmail,
      ContactPhone: this.yourPhone,
      contactCompany: this.yourCompnay,
      ContactSubject: this.yourSubject,
      ContactMessage: this.yourMessage,
    });

  }
  clearForm() {
    this.contactForm.reset();
  }
  ngOnInit() {
  }

}
