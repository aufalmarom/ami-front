import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
  ) { }

  createForm() {
    this.form = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(15)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'fullname': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(15)]),
      'age': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(200)]),
      'sex': new FormControl(null, [Validators.required]),
  });
 }
 
  ngOnInit() {
    this.createForm();
  }
  
  onSubmit(data){
    localStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(['/result-question']);
  }

}
