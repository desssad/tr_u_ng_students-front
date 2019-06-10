import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {any} from 'codelyzer/util/function';

export interface Student {
  id: string;
  name: string;
  university: string;
  birthYear: number;
}

const COLLECTION = 'studentsDb';
const url = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  errorMessages = new Map<number, string>();

  constructor(private fireStore: AngularFirestore) {
    this.errorMessages.set(400, 'bad request');
    this.errorMessages.set(401, 'authentication error');
    this.errorMessages.set(403, 'authorization error');
    this.errorMessages.set(404, 'not found');
  }

  private addUpdate(student: Student) {
    this.fireStore.collection(COLLECTION).doc(student.id).set(student);
  }

  addStudent(student: Student) {
    return of(this.addUpdate(student))
      .pipe(catchError(this.handleErrors.bind(this)));
    // return this.fireStore.post<Student>(url, student)
    //   .pipe(catchError(this.handleErrors.bind(this)));
  }

  updateStudent(student: Student) {
    return of(this.addUpdate(student))
      .pipe(catchError(this.handleErrors.bind(this)));
  }

  existsStudent(id: string): Observable<boolean> {
    return this.getStudent(id).pipe(map(s =>
      s ? true : false));
  }

  removeStudent(id: string) {
    return of(this.fireStore.collection(COLLECTION).doc(id).delete())
      .pipe(catchError(this.handleErrors.bind(this)));
  }

  getStudents(): Observable<Student[]> {
    return this.fireStore.collection<Student>(COLLECTION).valueChanges()
      .pipe(catchError(this.handleErrors.bind(this)));
  }

  getStudent(id: string): Observable<Student> {
    return this.fireStore.collection<Student>(COLLECTION).doc(id).get()
      .pipe(map(d => d.data() as Student), catchError(this.handleErrors.bind(this)));
  }

  private handleErrors(error: any) {
    if (!error.status) {
      return throwError(`Firestore isn\'t available, try again `);
    }
    if (this.errorMessages.has(error.status)) {
      return throwError(this.errorMessages.get(error.status));
    }
    return throwError(error.message);
  }
}
