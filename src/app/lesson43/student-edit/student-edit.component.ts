import {Component, OnInit} from '@angular/core';
import {Student, StudentsService} from '../students.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student$: Observable<Student>;

  constructor(private studentService: StudentsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.student$ = this.studentService.getStudent(id);
  }

  back() {
    this.router.navigate(['/students']).then();
  }

  update(student: Student) {
    this.studentService.updateStudent(student)
      .subscribe(() => this.back());
  }
}
