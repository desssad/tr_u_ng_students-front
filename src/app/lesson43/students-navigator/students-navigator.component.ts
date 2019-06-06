import {Component, OnInit} from '@angular/core';

interface Link {
  path: string;
  label: string;
}

@Component({
  selector: 'app-students-navigator',
  templateUrl: './students-navigator.component.html',
  styleUrls: ['./students-navigator.component.css']
})
export class StudentsNavigatorComponent implements OnInit {
  navLinks: Link[] = [
    {path: 'students', label: 'Students'},
    {path: 'student/add', label: 'Add new Student'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
