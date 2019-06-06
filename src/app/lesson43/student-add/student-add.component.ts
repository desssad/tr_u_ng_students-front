import { Component, OnInit } from '@angular/core';
import {Student, StudentsService} from '../students.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
  }

  add(form: NgForm) {
    this.studentService.addStudent(form.value as Student);
    form.reset();
  }
}
