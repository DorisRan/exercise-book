import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CHCharacter } from '../common/ch-character';

@Component({
  selector: 'app-chinese-book',
  templateUrl: './chinese-book.component.html',
  styleUrls: ['./chinese-book.component.css']
})
export class ChineseBookComponent implements OnInit {

  characters: Array<CHCharacter>;
  chRhyme: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
   
    this.http.get('assets/chinese.json')
      .subscribe(data => {
        var chList = data["characters"];
          this.characters = new Array<CHCharacter>(chList.length);
        for (var i = 0; i < chList.length && i< 10; i++) {
          var ch = chList[i];
          this.characters[i] = new CHCharacter(ch['pinying'], ch['hanzi']);
        }

        var rhymeList = data["rhymes"];
        var index = Math.round(Math.random() * rhymeList.length)
        this.chRhyme = index >= rhymeList.length ? rhymeList[index - 1] : rhymeList[index];
      });
  }

}
