export class FamilyMemberTO {
    id: number;
    name: string;

    static create(data: any): FamilyMemberTO {
        const tO = new FamilyMemberTO();
        tO.id = data.id;
        tO.name = data.name;

        return tO;
    }
}