import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ch-phonics',
  templateUrl: './ch-phonics.component.html',
  styleUrls: ['./ch-phonics.component.css']
})
export class ChPhonicsComponent implements OnInit {

  @Input() pinying:string;

  constructor() { }

  ngOnInit() {
  }

}
