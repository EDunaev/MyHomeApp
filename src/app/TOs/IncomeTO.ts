import { FamilyMemberTO } from "./FamilyMemberTO";

export class IncomeTO {
    id: number;
    income: number;
    familyMember: FamilyMemberTO;


    static create(data: any): IncomeTO {
        const tO = new IncomeTO();
        tO.id = data.id;
        tO.income = data.income;
        tO.familyMember = FamilyMemberTO.create(data.familyMember);

        return tO;
    }
}

