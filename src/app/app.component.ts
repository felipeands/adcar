import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  public isRegisterActive: boolean;

  toggleRegisterActive() {
    this.isRegisterActive = !this.isRegisterActive;
  }

  onCloseModal(ev) {
    this.toggleRegisterActive();
  }

}


