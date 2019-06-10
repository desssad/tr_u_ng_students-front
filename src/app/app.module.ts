import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Lesson43Module} from './lesson43/lesson43.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFirestore} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Lesson43Module,
    BrowserAnimationsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
