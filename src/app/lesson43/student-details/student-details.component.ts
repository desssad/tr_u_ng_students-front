import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Student, StudentsService} from '../students.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student$: Observable<Student>;

  constructor(private studentService: StudentsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.student$ = this.studentService.getStudent(param.get('id'));
    });
  }

  back() {
    this.router.navigate(['/students']);
  }
}
