import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ProductCodsAndNamesModel } from './../models/productCodsAndNames';
import { HttpService } from './../services/http.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DistributorSalesModel } from '../models/distributorSales';

@Component({
  selector: 'app-distr-sales',
  templateUrl: './distr-sales.component.html',
  styleUrls: ['./distr-sales.component.css']
})

export class DistrSalesComponent implements OnInit, OnDestroy {
  product: Array<DistributorSalesModel>;
  id: string;
  salesInfoForm: FormGroup;
  distrSaleInfo: any;
  options: Array<ProductCodsAndNamesModel>
  disableSelect = new FormControl(false);
  isHidden = false;
  productCode: Subscription;
  salesInfo: Subscription;
  displayedColumns = ['distributorId', 'distributorName', 'distributorSurename', 'saleDate', 'soldPoductQty', 'soldProductUnitPrice', 'soldProductTotalPrice', 'Pname', 'Pcode'];
  constructor(private httpPoructAndCode: HttpService, private httpAddSalesInfo: HttpService, private pipe: DatePipe) { }

  ngOnInit(): void {
    this.getProductAndCode();
    this.getDistributorSalesInfo();
    this.createSalesInfoForm();


  };

  getProductAndCode() {
    this.productCode = this.httpPoructAndCode.getProducts().subscribe((data) => {
      this.options = data;


    })
  }

  getDistributorSalesInfo() {
    this.salesInfo = this.httpAddSalesInfo.getDistrSalesInfo().subscribe((data) => {
      this.distrSaleInfo = data;

    });
  }

  createSalesInfoForm() {

    this.salesInfoForm = new FormGroup({
      distributorId: new FormControl(null, Validators.required),
      distributorName: new FormControl(null, Validators.required),
      distributorSurename: new FormControl(null, Validators.required),
      saleDate: new FormControl(null, Validators.required),
      Pcode: new FormControl(),
      Pname: new FormControl(),
      soldPoductQty: new FormControl(null, Validators.required),
      soldProductUnitPrice: new FormControl(null, Validators.required),
      // soldProductTotalPrice: new FormControl(null, Validators.required),


    });

  }

  ngOnDestroy() {
    this.salesInfo.unsubscribe();
    this.productCode.unsubscribe();
  }


  get Pcodes() {
    return this.options.map((item) => {
      return item.productCode;
    })

  }
  get Pnames() {
    return this.options.map((item) => {
      return item.productName;
    })
  };




  
  addInfo() {

    let saleDate = this.salesInfoForm.get('saleDate').value;
    let salesConvertedDate = this.pipe.transform(saleDate, 'yyyy-MM-dd');


    const productInfo: DistributorSalesModel = {

      distributorId: this.salesInfoForm.get('distributorId').value,
      distributorName: this.salesInfoForm.get('distributorName').value,
      distributorSurename: this.salesInfoForm.get('distributorSurename').value,
      saleDate: salesConvertedDate,
      saleDateForRange: this.salesInfoForm.get('saleDate').value,
      Pname: this.salesInfoForm.get('Pname').value,
      Pcode: this.salesInfoForm.get('Pcode').value,
      soldPoductQty: this.salesInfoForm.get('soldPoductQty').value,
      soldProductUnitPrice: this.salesInfoForm.get('soldProductUnitPrice').value,
      soldProductTotalPrice: this.salesInfoForm.get('soldPoductQty').value * this.salesInfoForm.get('soldProductUnitPrice').value,
      bonus: this.salesInfoForm.get('soldPoductQty').value * this.salesInfoForm.get('soldProductUnitPrice').value / 100 * 10


    };


    this.httpAddSalesInfo.addDistrSalesInfo(productInfo).subscribe((data) => {

      alert('data added');


    })
    this.httpAddSalesInfo.getDistrSalesInfo().subscribe((data) => {
      this.distrSaleInfo = data;
    })
  }

  showInfo() {
    this.isHidden = !this.isHidden;
  }

  get isHiddenBtn() {

    if (this.isHidden) {
      return 'show table'
    } else {
      return 'hide table'
    }
  }


  searchByDistrId(data: any) {
    const filtred = this.distrSaleInfo.filter((item: any) => {
      return item.distributorId === data.target.value;

    })
    this.distrSaleInfo = filtred;




  }

  searchByProductCode(data: any) {

    const filtred = this.distrSaleInfo.filter((item: any) => {
      return item.Pcode === data.target.value;

    })
    this.distrSaleInfo = filtred


  }
  searchByhDate(data: any) {
    let saleDate = data.target.value;
    let salesConvertedDate = this.pipe.transform(saleDate, 'yyyy-MM-dd');
    const filtred = this.distrSaleInfo.filter((item: any) => {
      return item.saleDate === salesConvertedDate;

    })
    this.distrSaleInfo = filtred

  }


}

