import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentsNavigatorComponent } from './students-navigator/students-navigator.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';

const routes: Routes = [
  {path: 'students/:id', component: StudentDetailsComponent},
  {path: 'students', component: StudentsListComponent},
  {path: 'student/edit/:id', component: StudentEditComponent},
  {path: 'student/add', component: StudentAddComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    StudentsListComponent,
    StudentDetailsComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentsNavigatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  exports: [StudentsNavigatorComponent]
})
export class Lesson43Module { }
