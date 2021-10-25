import { Subscription } from 'rxjs';
import { HttpService } from './../services/http.service';
import { distributorRegistracionModel } from './../models/distributorRegistrModel';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.css']
})
export class DistributorListComponent implements OnInit, OnDestroy {
  distributorList: Array<distributorRegistracionModel>
  hasEditMode: boolean = true;
  editDivHidden: boolean = true;
  IseditDivHidden: boolean = false;
  distributors: Subscription;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    this.getDistributorList()
  }
  ngOnDestroy() {

    this.distributors.unsubscribe();
  }

  getDistributorList() {
    this.distributors = this.httpService.getRegistredDistributors().subscribe((data) => {
      this.distributorList = data;

    })
  }

  editData() {

    this.hasEditMode = !this.hasEditMode;
    this.editDivHidden = !this.editDivHidden;
    this.IseditDivHidden = !this.IseditDivHidden;
    if (this.hasEditMode) {

      for (const data of this.distributorList) {

        this.httpService.editDistributorFromList(data).subscribe(() => {

        })
      }

    }

  }

  deleteData(id: any) {


    this.httpService.deleteDistributorFromList(id).subscribe((data) => {
      const find = this.distributorList.find((item) => {
        return item.id === id;

      });
      const index = this.distributorList.indexOf(find);
      this.distributorList.splice(index, 1)


    });


  };

  get editBtnMode() {

    if (this.hasEditMode) {
      return 'EDIT'
    } else {
      return 'SAVE'
    }
  }
}
