import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDogClick() {
    console.log('dog');
  }

  onCatClick() {
    console.log('cat');
  }

  onHorseClick() {
    console.log('horse');
  }

  onSnailClick() {
    console.log('snail');
  }

}
