import { FamilyMemberTO } from "./FamilyMemberTO";
import { MonthEntryTO } from "./MonthEntryTO";

export class IncomeTO {
    id: number;
    income: number;
    familyMember: FamilyMemberTO;
    monthEntry: MonthEntryTO;


    static create(data: any): IncomeTO {
        const tO = new IncomeTO();
        tO.id = data.id;
        tO.income = data.income;
        tO.familyMember = FamilyMemberTO.create(data.familyMember);
        tO.monthEntry = MonthEntryTO.create(data.monthEntry);

        return tO;
    }
}

