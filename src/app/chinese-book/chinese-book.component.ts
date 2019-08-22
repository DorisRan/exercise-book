import { Component, OnInit } from '@angular/core';
import { ChRhymes, PinYing } from '../common/mock-ch-rhyme';

@Component({
  selector: 'app-chinese-book',
  templateUrl: './chinese-book.component.html',
  styleUrls: ['./chinese-book.component.css']
})
export class ChineseBookComponent implements OnInit {
  
  chRhyme : string;
  pinying: string;

  constructor() { }

  ngOnInit() {
    var index = Math.round (Math.random()* ChRhymes.length)
    this.chRhyme = index >= ChRhymes.length? ChRhymes[index-1]:ChRhymes[index];
    index = Math.round (Math.random()* PinYing.length)
    this.pinying = index >= PinYing.length? PinYing[index-1]:PinYing[index];
  }

}
