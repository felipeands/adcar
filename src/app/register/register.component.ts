import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

export interface Register {
  name: string;
  email: string;
  phone: string;
  how: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  @Input() open;
  @Output() close = new EventEmitter;
  @ViewChild('name') fieldNameElement: ElementRef;

  public isFormSubmited: boolean;
  public isFormSent: boolean;
  private registerCollectionRef: AngularFirestoreCollection<Register>;

  constructor(
    private element: ElementRef,
    private afs: AngularFirestore
  ) {
    this.registerCollectionRef = this.afs.collection<Register>('register');
  }

  ngOnInit() { }

  ngOnChanges() {
    this.inputFocus();
  }

  onClose() {
    this.close.emit('close');
  }

  isOpen() {
    return this.open;
  }

  inputFocus() {
    setTimeout(() => {
      this.fieldNameElement.nativeElement.focus();
    });
  }

  onFormSubmit(form) {
    if (!this.isFormSubmited) {
      this.isFormSubmited = true;
      this.registerCollectionRef.add(form.value);
      this.isFormSent = true;
    }
  }

}
