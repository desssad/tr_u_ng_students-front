import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Student, StudentsService} from '../students.service';
import {MatNativeDateModule, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit, OnDestroy {

  dataSource: MatTableDataSource<Student>;
  displayedColumns = ['id', 'name', 'details', 'edit', 'delete'];

  constructor(private studentService: StudentsService) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.dataSource = new MatTableDataSource<Student>(students);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, error => alert(error));
  }

  remove(id: string) {
    this.studentService.removeStudent(id)
      .subscribe(() => this.ngOnInit(), error => alert(error));
  }

  ngOnDestroy(): void {
    // console.log('component students list: ngOnDestroy');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
