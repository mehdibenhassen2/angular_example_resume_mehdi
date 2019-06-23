import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  yourName: string;
  yourEmail: string;
  yourMessage: string;
  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
    const allInfo = `My name is ${this.yourName}. My email is ${this.yourEmail}. My message is ${this.yourMessage}`;
    alert(allInfo);
  }
}
