import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
// import { DeLession } from '../common/de-lesson';
// import { DELESSIONS } from '../common/mock-de-lessons';

@Component({
  selector: 'app-english-book',
  templateUrl: './english-book.component.html',
  styleUrls: ['./english-book.component.css']
})
export class EnglishBookComponent implements OnInit {
  rhymeName: string;
  content: [];
  author: string;
  // lesson: DeLession;

  // constructor() { }

  // ngOnInit() {
  //   var index = Math.round(Math.random() * DELESSIONS.length)
  //   this.lesson = DELESSIONS[(index >= DELESSIONS.length ? index - 1 : index)];
  // }

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('assets/materials/english.json')
      .subscribe(data => {
        const date = new Date()
        var rhymeList = data["rhymes"];
        var i1 = date.getDate() % rhymeList.length
        // var i1 = Math.round(Math.random() * rhymeList.length)
        var rhyme = rhymeList[i1];
        this.rhymeName = rhyme.name;
        this.content = rhyme.content;
        this.author = rhyme.author;
      });
  }
}
