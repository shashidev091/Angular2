import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestAppService {
  getCourses(): string[] {
    return ['one', 'two', 'three'];
  }
}
