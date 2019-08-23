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

    this.http.get('assets/materials/chinese.json')
      .subscribe(data => {
        var frequency = data["frequency"];

        var chList = data["characters"];
        this.characters = new Array<CHCharacter>(frequency);
        var i0 = Math.round(Math.random() * chList.length);

        for (var counter = 0; counter < frequency; counter++) {
          if (i0 >= chList.length) {
            i0 = 0;
          }
          var ch = chList[i0];
          this.characters[counter] = new CHCharacter(ch[0], ch[1]);
          i0++;
        }

        var rhymeList = data["rhymes"];
        var i1 = Math.round(Math.random() * rhymeList.length)
        this.chRhyme = i1 >= rhymeList.length ? rhymeList[i1 - 1] : rhymeList[i1];
      });
  }

}
