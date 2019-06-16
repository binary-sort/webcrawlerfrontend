import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    url: new FormControl('', [Validators.required]),
    depth: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

}
