import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-book';

  ngOnInit() {
  }

  getScope():Array<number> {
    return new Array(10);
  }
}
