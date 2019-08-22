import { Component, OnInit, Input } from '@angular/core';
import { PinYing } from '../common/mock-ch-rhyme';
import { CHCharacter } from '../common/ch-character';

@Component({
  selector: 'app-chinese-hanzi',
  templateUrl: './chinese-hanzi.component.html',
  styleUrls: ['./chinese-hanzi.component.css']
})
export class ChineseHanziComponent implements OnInit {

  @Input() character:CHCharacter;

  constructor() { }

  ngOnInit() {
  }

}
