import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from "@angular/common/http";

import { AngularFireDatabase } from "@angular/fire/compat/database";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  messageSent = 0;

  private myForm: AngularFirestoreCollection<any>;

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
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private firestore: AngularFirestore
  ) {
    // Passing in MD_Bootstrap form validation

    this.contactForm = fb.group({
      contactFormName: ["", Validators.required],
      contactFormEmail: ["", [Validators.required, Validators.email]],
      contactFormSubject: ["", Validators.required],
      contactFormMessage: ["", Validators.required],
      ContactFormPhone: ["", Validators.required],
      ContactFormCompany: ["", Validators.required],
    });
  }
  // Pushing the contact-form to the firebase data base

  sendEmail(value: any) {
    this.myForm
      .add(value)
      .then((res) => {
        this.messageSent = 1;
        // Popup message

        setTimeout(() => {
          this.messageSent = 0;
        }, 2000);
      })
      .catch((error) => {
        this.messageSent = 2;
      });
  }
  clearForm() {
    this.contactForm.reset();
  }
  ngOnInit() {
    this.myForm = this.firestore.collection("enguiry");
  }
}
