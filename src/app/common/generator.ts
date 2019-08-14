import { ADD_OP, SUB_OP } from './equation';
import { BidEquation } from './bid-equation';

// Generate a given amount of 2 variables equations with following rules:
// 1. All factors is between [0, limit] 
// 2. Calculation result in between [0, limit]
// 3. generate half addtion half substraction.
// count - the amount of equation to be generated.
// limit - the limitation of factors and calculate result.
export class Generator {
    generateXY(count: number, limit: number): Array<BidEquation> {
        var equations = new Array<BidEquation>(count);
        var factors = new Array<number>();

        var addCount = Math.round(count / 2);

        for (var i = 0; i < addCount; i++) {
            var f1 = Math.round(Math.random() * limit);
            while (factors.includes(f1)) {
                f1 = Math.round(Math.random() * limit);
            }

            var f2 = Math.round(Math.random() * limit);

            while (f1 + f2 > limit) {
                f2 = Math.round(Math.random() * limit);
            }

            equations[i] = new BidEquation(f1, f2, ADD_OP);
        }


        var subCount = count - addCount;
        factors = new Array<number>();

        for (var i = 0; i < subCount; i++) {
            var f1 = Math.round(Math.random() * limit);
            var f2 = Math.round(Math.random() * limit);

            while (factors.includes(f1)) {
                f1 = Math.round(Math.random() * limit);
            }

            while (factors.includes(f2)) {
                f2 = Math.round(Math.random() * limit);
            }


            equations[i + addCount] = new BidEquation(Math.max(f1, f2), Math.min(f1, f2), SUB_OP);
        }

        return equations;
    };
}