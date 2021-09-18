import { MonthEntryTO } from './MonthEntryTO';

export class OutputTO {
    id: number;
    name: string;
    entryPrice: number;
    itemComment: string;
    itemType: string;
    isPaid: boolean;
    monthEntryId: MonthEntryTO;

    static create(data: any): OutputTO {
        const tO = new OutputTO();
        tO.id = data.id;
        tO.name = data.name;
        tO.entryPrice = data.entryPrice;
        tO.itemComment = data.itemComment;
        tO.itemType = data.itemType;
        tO.isPaid = data.isPaid;
        tO.monthEntryId = MonthEntryTO.create(data.monthEntryId);

        return tO;
    }

    copyTo(): OutputTO {
        return OutputTO.create(this);
    }

    setValues(data: OutputTO): void {
        this.id = data.id;
        this.name = data.name;
        this.entryPrice = +data.entryPrice;
        this.itemComment = data.itemComment;
        this.itemType = data.itemType;
        this.isPaid = data.isPaid;
        this.monthEntryId;
    }
}