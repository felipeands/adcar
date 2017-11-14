import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRRgUIZ1qhheG9S5gof5U_Dk80fkweSuc",
  authDomain: "adcar-9227f.firebaseapp.com",
  databaseURL: "https://adcar-9227f.firebaseio.com",
  projectId: "adcar-9227f",
  storageBucket: "adcar-9227f.appspot.com",
  messagingSenderId: "647317866520"
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
