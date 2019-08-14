import { Component, OnInit, Input } from '@angular/core';
import { BidEquation } from '../common/bid-equation';
import { Generator } from '../common/generator';

@Component({
  selector: 'app-math-book',
  templateUrl: './math-book.component.html',
  styleUrls: ['./math-book.component.css']
})
export class MathBookComponent implements OnInit {

  timer: any;
  columnSum: number;
  rowSum: number;
  timepiece: string;

  factorLimit = 50;

  equColumns: Array<Array<BidEquation>>;

  constructor() { }

  ngOnInit() {
    this.timepiece = "00:00:00";
    this.columnSum = 4;
    this.rowSum = 5;
    this.initEquation();
  }

  initEquation() {

    var equGen = new Generator();
    this.equColumns = new Array<Array<BidEquation>>(this.columnSum);

    for (var colum = 0; colum < this.columnSum; colum++) {
      this.equColumns[colum] = equGen.generateXY(this.rowSum, 50);
    }
  }

  doCheck() {
    for (let euqCol of this.equColumns) {
      for (let equ of euqCol) {
        equ.doCheck();
      }
    }
  }

  doReset() {
    for (let euqCol of this.equColumns) {
      for (let equ of euqCol) {
        equ.doReset();
      }
    }
    this.setTimer(false);
  }

  setTimer(flag) {
    var second = 0;
    if (flag == 1) {
      this.timer = setInterval(
        (success) => { //回掉函数开始计时了
          second++;
          var hr = Math.round(second / 3600);
          var min = Math.round((second / 60) % 60);
          var sec = Math.round (second % 60);
          this.timepiece = (hr < 10 ? ("0" + hr) : hr) + ":" 
          + (min < 10 ? ("0" + min) : min) + ":" 
          + (second < 10 ? ("0" + sec) : sec);
          //other actions
        }, 1000);
    }
    else if (flag == 0) {
      //other actions
      //清除计时器
      window.clearInterval(this.timer);
    }
  }

  startTimer() {
    this.setTimer(true);
  }
}
