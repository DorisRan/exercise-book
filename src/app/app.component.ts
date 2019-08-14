import { Component } from '@angular/core';
import { ChRhymes } from './common/mock-ch-rhyme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-book';
  chRhyme : string;

  ngOnInit() {
    var index = Math.round (Math.random()* ChRhymes.length)
    this.chRhyme = index >= ChRhymes.length? ChRhymes[index-1]:ChRhymes[index];
  }
}
