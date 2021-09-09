import { MonthEntryTO } from './MonthEntryTO';

export class OutputTO {
    id: number;
    name: string;
    entryPrice: number;
    itemComment: string;
    itemType: string;
    monthEntryId: MonthEntryTO;

    static create(data: any): OutputTO {
        const tO = new OutputTO();
        tO.id = data.id;
        tO.name = data.name;
        tO.entryPrice = data.entryPrice;
        tO.itemComment = data.itemComment;
        tO.itemType = data.itemType;
        tO.monthEntryId = MonthEntryTO.create(data.monthEntryId);
        
        return tO;
    }
}