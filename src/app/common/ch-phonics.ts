export const MID_LINE = 0;
export const TOP_MID_LINES = 1;
export const MID_BOTTOM_LINES = 2;

export class ChPhonics {
    phoics: string;   
    position: number; 

    constructor(ph:string, po:number) {
        this.phoics = ph;
        this.position = po;
    }
}