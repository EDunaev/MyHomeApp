export class MonthEntryTO {
    id: number;
    entryYear: number;
    entryMonth: number;
    expectedState: number;
    realState: number;
    actualState: number;
    lineNumber: number;

    static create(data: any): MonthEntryTO {
        const tO = new MonthEntryTO();
        tO.id = data.id;
        tO.entryYear = data.entryYear;
        tO.entryMonth = data.entryMonth;
        tO.expectedState = data.expectedState;
        tO.realState = data.realState;
        tO.actualState = data.actualState;
        
        return tO;
    }

}