import { Component, OnInit } from '@angular/core';
import { StudentService} from './student.service';
import {GridOptions} from 'ag-grid-community';
import { Student } from './student';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  columnDefs = [
        {headerName: 'ID', field: 'id', width: 60, sortable: true, filter: true },
        {headerName: 'Name', field: 'name', sortable: true, filter: true },
        {headerName: 'Enrollmentnumber', field: 'enrollmentnumber', sortable: true, filter: true},
        {headerName: 'College', field: 'college', sortable: true, filter: true},
        {headerName: 'University', field: 'university', sortable: true, filter: true}
    ];
  rowData: Student;
  public message: String;
  public name = 'Gowsalya';

  ngOnInit() {
    this.name = 'Rajesh';

    const studentsObservable = this.studentService.getStudents('Pass Parameter');
      studentsObservable.subscribe((studentsData: Student) => {
          this.rowData = studentsData;
      });
  }

  constructor(private studentService: StudentService) {
  }
}
