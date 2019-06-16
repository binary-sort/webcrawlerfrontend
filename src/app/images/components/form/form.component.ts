import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormActions } from '../../actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    url: new FormControl('', [
      Validators.required,
      Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
    ]),
    depth: new FormControl('', [Validators.required])
  });

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(new FormActions.LoadImages(this.form.value));
  }

}
