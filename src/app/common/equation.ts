export const ADD_OP = "+";
export const SUB_OP = "-";

export class Equation {
    factors: Array<number>;
    operators: Array<string>;
    inFactor: number;

    constructor(fList: Array<number>, opList: Array<string>) {
        this.factors = fList;
        this.operators = opList;
    }

    // calculate the correct result
    doCalculate(): number {
        var result = this.factors[0];

        for (var i = 0; i < this.operators.length; i++) {
            var f = this.factors[i + 1];
            if (this.operators[i] == ADD_OP) {
                result += f;
            } else {
                result -= f;
            }
        }

        return result;

    }

    doCheck(): boolean {
        return this.doCalculate() == this.inFactor;
    }

    doReset() {
        this.inFactor = null;
    }
}