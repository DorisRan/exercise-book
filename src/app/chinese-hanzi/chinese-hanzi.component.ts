import { Component, OnInit, Input } from '@angular/core';
import { CHCharacter } from '../common/ch-character';

@Component({
  selector: 'app-chinese-hanzi',
  templateUrl: './chinese-hanzi.component.html',
  styleUrls: ['./chinese-hanzi.component.css']
})
export class ChineseHanziComponent implements OnInit {

  @Input() character: CHCharacter;

  pinyingList: Array<string>;
  hanziList: Array<string>;

  constructor() { }

  ngOnInit() {
    this.pinyingList = this.character.pinying.split(" ");

    this.hanziList = new Array<string>(this.character.hanzi.length);
    for (var i = 0; i < this.character.hanzi.length; i++) {
      this.hanziList[i] = this.character.hanzi.substr(i, 1);
    }
  }

}
