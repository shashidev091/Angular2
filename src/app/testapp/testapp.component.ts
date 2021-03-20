import { Component } from '@angular/core';
import {TestappService} from './testapp.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'testapp-comp',
  // template: '<h1> This test is working</h1>'
  templateUrl: './testapp.component.html',
  styleUrls: ['testapp.component.scss']
})
export class TestComponent {
  title = 'Here it is';
  courses;
  imgUrl: string;
  oneWay = 'This is one way property binding';
  newMail = 'two way binding';
  newCourse = {
    title: 'This is angular',
    rating: 4.97432,
    students: 23223,
    price: 239.23,
    releaseDate: new Date(2017, 4, 3)
  };
  toggleSpan = false;
  constructor(private service: TestappService) {
    this.courses = service.getCourses();
    this.imgUrl = 'https://images.unsplash.com/photo-1615971367805-b02c6f5c4aaa?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  }

  onSave(event): void {
    console.log('This works');
    console.log(event);
  }
  keyUp(event): void {
    console.log(event.target.value);
  }
  onEmailKeyUp(email): void {
    console.log(email);
  }
  oneWayM(input): void {
    console.log(input);
  }
  getNewMail(): void {
    console.log(this.newMail);
  }
  toggle(): void {
    this.toggleSpan = !this.toggleSpan;
  }
  onReusableComponentCLicked(event: {eval: string}): void {
    console.log('yahoo', event);
  }
}
