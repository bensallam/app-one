import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() {
  }
  methodContacts = [{id: 1, name: 'sms' }, {id: 2, name: 'phone'}, {id: 3, name: 'email'}];
  log(x) {
    console.log(x);
  }
  submit(f) {
   console.log(f.value);
  }
  ngOnInit() {
  }


}
