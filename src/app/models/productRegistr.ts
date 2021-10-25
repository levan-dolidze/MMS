export class productRegistrModel{
    productCode:string;
    productName:string;
    productPrice:number;
    constructor(productCode:string,productName:string,productPrice:number){
        this.productCode=productCode;
        this.productName=productName;
        this.productPrice=productPrice;

    }
}