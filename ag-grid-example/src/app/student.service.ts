import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [{
      id: 1,
      name: 'Rajesh',
      enrollmentnumber: 110470116021,
      college: 'Arunai Engineering College',
      university: 'ANNA'
  },
  {
      id: 2,
      name: 'Lenin',
      enrollmentnumber: 110470116023,
      college: 'Hindustan Engineering College',
      university: 'ANNA'
  },
  {
      id: 3,
      name: 'Aravind',
      enrollmentnumber: 110470116022,
      college: 'Erode Engineering College',
      university: 'ANNA'
  }];

  constructor() { }

  public getStudents(name: string): any {
      const studentsObservable = new Observable(observer => {
                console.log(name);
               observer.next(this.students);
            });

      return studentsObservable;
  }
}
