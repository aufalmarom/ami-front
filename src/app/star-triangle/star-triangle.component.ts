import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-triangle',
  templateUrl: './star-triangle.component.html',
  styleUrls: ['./star-triangle.component.css']
})
export class StarTriangleComponent implements OnInit {
  public a: number;
  star: string = "";

  constructor(
  ) {
    this.a = 8;
  }

  ngOnInit() {
    this.star += "Result</br>";
    this.star += "------------</br>";
    for (let i = 0; i < this.a; i++) {
      for (let j = 0; j <= i; j++) {
        if (j >= 1 && j <= i-1) {
        	this.star += " ";
        }else{
        	this.star += "*";
        }
      }
      this.star += "</br>";
    }
    this.star += "------------</br>";
    console.log(this.star);
    document.querySelector('#star').innerHTML = this.star;
  }

  save(){
    this.star += "Next Result</br>";
    this.star += "------------</br>";
    for (let i = 0; i < this.a; i++) {
      for (let j = 0; j <= i; j++) {
        	this.star += "*";
      }
      this.star += "</br>";
    }
    this.star += "------------</br>";
    document.querySelector('#star').innerHTML = this.star;
  }
  
}
