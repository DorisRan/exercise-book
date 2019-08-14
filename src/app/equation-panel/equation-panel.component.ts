import { Component, OnInit, Input } from '@angular/core';
import { BidEquation } from '../common/bid-equation';

@Component({
  selector: 'app-equation-panel',
  templateUrl: './equation-panel.component.html',
  styleUrls: ['./equation-panel.component.css']
})
export class EquationPanelComponent implements OnInit {

  @Input() equations: Array<BidEquation>;


  constructor() { }

  ngOnInit() {
  }
}
