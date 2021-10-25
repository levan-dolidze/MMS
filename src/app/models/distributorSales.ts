export class DistributorSalesModel {
    id?: string;
    distributorId: string;
    distributorName: string;
    distributorSurename: string;
    saleDate: string;
    saleDateForRange: any;
    Pcode: string;
    Pname: string
    soldPoductQty: number;
    soldProductUnitPrice: number;
    soldProductTotalPrice: number;
    bonus: number;

    constructor(id: string, distributorId: string, distributorName: string, distributorSurename: string, saleDate: string, saleDateForRange: any, Pcode: string, Pname: string, soldPoductQty: number,
        soldProductUnitPrice: number, soldProductTotalPrice: number, bonus: number) {
        this.id = id;
        this.distributorName = distributorName;
        this.distributorSurename = distributorSurename;
        this.distributorId = distributorId;
        this.saleDate = saleDate;
        this.saleDateForRange = saleDateForRange;
        this.Pcode = Pcode;
        this.Pname = Pname;
        this.soldPoductQty = soldPoductQty;
        this.soldProductUnitPrice = soldProductUnitPrice;
        this.soldProductTotalPrice = soldProductTotalPrice;
        this.bonus = bonus



    }



}