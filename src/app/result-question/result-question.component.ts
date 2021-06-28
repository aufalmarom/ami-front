import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-question',
  templateUrl: './result-question.component.html',
  styleUrls: ['./result-question.component.css']
})
export class ResultQuestionComponent implements OnInit {
  data: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('data'));
  }

  onSave(datas){
    localStorage.setItem('result', JSON.stringify(datas));
    this.router.navigate(['/dynamic-question']);
  }

}
