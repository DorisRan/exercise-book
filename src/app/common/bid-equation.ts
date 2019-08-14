import { ADD_OP, SUB_OP } from './equation';

export class BidEquation {
    factor1: number;
    factor2: number;
    operator: string;
    input: number;
    checked: boolean;

    constructor(f1: number, f2: number, op: string) {
        this.factor1 = f1;
        this.factor2 = f2;
        this.operator = op;
        this.checked = false;
    }

    doCheck() {
        this.checked = true;
    }

    doReset() {
        this.checked = false;
        this.input = null;
    }

    needCorrection(): boolean {
        return (this.operator == ADD_OP ?
            (this.factor1 + this.factor2) :
            (this.factor1 - this.factor2)) != this.input;
    }
}