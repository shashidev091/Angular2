import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-reuseable',
  templateUrl: './reuseable.component.html',
  styleUrls: ['./reuseable.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ReuseableComponent implements OnInit {
  @Input()
  title: string;
  @Output('disco')
  disco = new EventEmitter();
  newInput;
  @Input('test-input')
  newInputs;
  courses = [ 'java', 'python', 'JavaScript', 'Angular', 'React', 'MongoDB', 'MySql'];
  msg: string;
  // onReusableComponentCLicked
  constructor() { }
  count = 1;
  viewMode = 'map';
  ngOnInit(): void {
  }

  onClick(): void {
    this.disco.emit('text');
  }

  decreaseCourseHandler(): void {
    const courseCopy = this.courses;
    if (courseCopy.length > 0) {
      courseCopy.pop();
      this.msg = `${this.count++} item removed`;
    } else {
      this.msg = `sorry there are no courses to remove`;
      this.count = 1;
    }
    this.courses = courseCopy;
  }
}
