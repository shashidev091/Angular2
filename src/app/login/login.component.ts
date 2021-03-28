import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  courses;
  isSelected = true;
  constructor() { }

  ngOnInit(): void {
  }
  loadCoursesHandler(): void {
    this.courses = [
      {id: 1, course: 'Java'},
      {id: 2, course: 'Python'},
      {id: 3, course: 'Angular'},
      {id: 4, course: 'Bootstrap'}
    ];
  }
  trackCourse(index, course): any {
    return course ? course.id : undefined;
  }
  chnageState(): void {
    this.isSelected = !this.isSelected;
  }
}
