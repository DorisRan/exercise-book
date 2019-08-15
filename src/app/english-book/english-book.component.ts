import { Component, OnInit } from '@angular/core';
import { DeLession } from '../common/de-lesson';
import { DELESSIONS } from '../common/mock-de-lessons';

@Component({
  selector: 'app-english-book',
  templateUrl: './english-book.component.html',
  styleUrls: ['./english-book.component.css']
})
export class EnglishBookComponent implements OnInit {

  lesson: DeLession;

  constructor() { }

  ngOnInit() {
    var index = Math.round(Math.random() * DELESSIONS.length)
    this.lesson = DELESSIONS[(index >= DELESSIONS.length ? index - 1 : index)];
  }
}
