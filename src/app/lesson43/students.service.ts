import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Student {
  id: string;
  name: string;
  university: string;
  birthYear: number;
}

const url = 'http://localhost:3000/students';
@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private http: HttpClient) {}

  addStudent(student: Student) {
    this.http.post<Student>(url, student).subscribe();
  }

  updateStudent(student: Student) {
    return this.http.put<Student>(`${url}/${student.id}`
      , student);
  }

  existsStudent(id: string): Observable<boolean> {
    return this.getStudent(id).pipe(map(s =>
      s ? true : false ));
  }

  removeStudent(id: string) {
    return this.http.delete(`${url}/${id}`);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(url);
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${url}/${id}`);
  }
}
