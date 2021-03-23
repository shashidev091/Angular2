import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contectMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Mobile-phone'},
    {id: 3, name: 'Mail-Service'},
    {id: 4, name: 'Telephone'}
  ];

  constructor() { }

  ngOnInit(): void { }
  log(chnage): void {
    console.log(chnage);
  }
  submit(f): void {
    console.log(f);
  }
}
