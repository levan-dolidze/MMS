import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { distributorRegistracionModel } from './../models/distributorRegistrModel';
import { DistributorSalesModel } from './../models/distributorSales';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-distr-bonus',
  templateUrl: './distr-bonus.component.html',
  styleUrls: ['./distr-bonus.component.css']
})
export class DistrBonusComponent implements OnInit, OnDestroy {
  salesInfo: Array<DistributorSalesModel>;
  distributorList: Array<distributorRegistracionModel>;
  bonusFromProtege = 0;
  rangeForm: FormGroup;
  bonusData: Subscription

  constructor(private httpServiceBonus: HttpService, private pipe: DatePipe) { }

  ngOnInit(): void {
    this.createRangeForm();
    this.getSalesInfo();
    this.getDistributorsData();
  };


  ngOnDestroy() {

    this.bonusData.unsubscribe()
  };

  createRangeForm() {
    this.rangeForm = new FormGroup({
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required)
    })
  };
  getSalesInfo() {
    this.bonusData = this.httpServiceBonus.getDistrSalesInfo().subscribe((data) => {
      this.salesInfo = data;

    });
  };
  getDistributorsData() {
    this.httpServiceBonus.getRegistredDistributors().subscribe((data) => {
      this.distributorList = data

    });
  };



  countBonus() {

    this.bonusFromProtege = 0
    const map = this.distributorList.map((item) => {
      return item.protegePersonalNo;
    });
    const find = map.find((item) => {
      return item;
    })
    for (let index = 0; index < find.length; index++) {
      for (const iterator of this.salesInfo) {
        if (iterator.distributorId == find[index]) {
          this.bonusFromProtege += iterator.soldProductTotalPrice / 100 * 5
        };
      };
    };
  
  };

  searchByname(input: any) {

    this.httpServiceBonus.getDistrSalesInfo().subscribe((data) => {
      this.salesInfo = data
      const filtred = this.salesInfo.filter((item: any) => {
        return item.distributorName === input.target.value;

      })
      this.salesInfo = filtred

    });

  }
  searchBySurename(input: any) {
    this.httpServiceBonus.getDistrSalesInfo().subscribe((data) => {
      this.salesInfo = data;

      const filtred = this.salesInfo.filter((item: any) => {
        return item.distributorSurename === input.target.value;

      })
      this.salesInfo = filtred;
    });

  };

  searchMinBonus() {
    this.httpServiceBonus.getDistrSalesInfo().subscribe((data) => {
      this.salesInfo = data
      const map = this.salesInfo.map((item) => {
        return item.soldProductTotalPrice;
      })


      const filtred = this.salesInfo.filter((item) => {
        return item.soldProductTotalPrice === Math.min.apply(null, map)
      });
      this.salesInfo = filtred

    });

  };

  searchMaxBonus() {

    this.httpServiceBonus.getDistrSalesInfo().subscribe((data) => {
      this.salesInfo = data
      const map = this.salesInfo.map((item) => {
        return item.soldProductTotalPrice;
      })


      const filtred = this.salesInfo.filter((item) => {
        return item.soldProductTotalPrice === Math.max.apply(null, map)
      });
      this.salesInfo = filtred

    });

  };

  searchByRange() {
    const start = this.rangeForm.value.start;
    const end = this.rangeForm.value.end;

    const filterByRange = this.salesInfo.filter((item) => {
      return new Date(item.saleDateForRange) >= start && new Date(item.saleDateForRange) <= end
    });

    this.salesInfo = filterByRange;

  };

};


