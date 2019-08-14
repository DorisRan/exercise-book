import { Component, OnInit, Input } from '@angular/core';
import {BidEquation} from '../common/bid-equation'

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  @Input() equation: BidEquation;

  constructor() { }

  ngOnInit() {
  }

}
