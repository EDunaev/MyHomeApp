export class SchichtTO {
    id: number;
    parentsName: string;
    date: string;

    static create(data: any): SchichtTO {
        const tO = new SchichtTO();
        tO.id = data.id;
        tO.parent(data.parentId);
        tO.adjustedDate(data.date);
        
        return tO;
    }


    //todo: replace this method with something appropriate.
    parent(value: number) {
        if(value === 1) {
          this.parentsName = "Papa";
        }
        else
        {
          this.parentsName = "Mama";
        } 
      }

    adjustedDate(value)
    {
        this.date = value.dayOfMonth + "-" + value.month + "-" + value.year;
    }
}